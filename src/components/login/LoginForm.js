import styled from "styled-components";
import { LoginBtn, LoginInner, LoginOuter, SignUpBtn } from "./Styled";
import { useState, useEffect } from "react";
import { useInputs } from "../../core/hooks/useInputs";
import { userLogin } from "../../core/api/login";
import { useNavigate } from "react-router-dom";
import sweetAlert from "../../core/utils/sweetAlert";

// import { useInputs } from "../core/hooks/useInputs";
// import { userLogin } from "../core/api/login";
const LoginFrom = ({ onClickInformBtn }) => {
  const navigate = useNavigate();
  const [inputs, onChangeInput, clearInput] = useInputs();
  const { userEmail, password } = inputs;

  useEffect(() => {
    clearInput();
  }, []);

  const is_userId = (asValue) => {
    const regIdExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // 아이디는 최소 4자 이상, 15자 이하 알파벳 대소문자(a-z, A-Z), 숫자(0-9)로 구성됩니다.
    // id:영문-숫자 4,10

    //  이메일 형식으로 되어 반드시 @와. 이 들어간 완성된 이메일 형식으로 되어야 한다.
    let result = regIdExp.test(asValue);

    return result;
  };

  const onUserLogin = (e) => {
    e.preventDefault();
    const maxlength = 20;
    const minlength = 6;
    const blankExp = /[\s]/g;
    if (blankExp.test(userEmail)) {
      return sweetAlert(1000, "error", "공백을 제거해주세요");
    }
    if (is_userId(userEmail) === false) {
      sweetAlert(1000, "error", "이메일 형식이 맞지 않습니다.");
      return;
    }
    if (
      password < minlength ||
      password > maxlength ||
      password.trim() === ""
    ) {
      return sweetAlert(
        1000,
        "error",
        "비밀번호는 최소 6자 이상, 18자 이하의 알파벳 소문자, 숫자여야 합니다"
      );
    }
    const loginUser = {
      email: userEmail,
      password: password,
    };
    userLogin(loginUser).then((res) => {
      console.log(res);
      localStorage.setItem("id", res.headers.authorization);
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("hashTag", res.data.hashTag);
      localStorage.setItem("profilePic", res.data.profilePic);
      sweetAlert(1000, "success", "로그인 성공");
      // navigate("/main");
    });
  };
  return (
    <LoginOuter className="form_wrapper">
      <LoginInner className="form_inner" onSubmit={onUserLogin}>
        <p className="form_title">돌아오신것을 환영해요!</p>
        <p className="form_subtitle">다시 만나다니 너무 반가워요!</p>

        <p>
          이메일 <span>★</span>
        </p>
        <input
          type="text"
          id="userEmail"
          name="userEmail"
          value={userEmail || ""}
          onChange={onChangeInput}
          placeholder="이메일을 입력해주세요"
        ></input>
        <p>
          비밀번호 <span>★</span>
        </p>
        <input
          type="password"
          id="password"
          name="password"
          value={password || ""}
          onChange={onChangeInput}
          placeholder="비밀번호를 입력해주세요"
        ></input>
        <LoginBtn className="login_btn">로그인하기</LoginBtn>
        <p>
          계정이 필요한가요?
          <SignUpBtn onClick={onClickInformBtn}>가입하기</SignUpBtn>
        </p>
        <div className="discor_img"></div>
      </LoginInner>
    </LoginOuter>
  );
};

export default LoginFrom;
