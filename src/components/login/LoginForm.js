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

  // console.log("인풋츠 나오나?", inputs);
  useEffect(() => {
    clearInput();
  }, []);

  const onUserLogin = (e) => {
    e.preventDefault();
    userLogin({
      userEmail,
      password,
    })
      .then((res) => {
        sweetAlert(1000, "success", "로그인 성공");
        localStorage.setItem("name", res.headers.authorization);
        // console.log("닉네임도 받아와",res)
        navigate("/main");
      })
      .catch((error) => sweetAlert(1000, "error", error.response.data.msg));
  };
  return (
    <LoginOuter className="form_wrapper">
      <LoginInner className="form_inner">
        <p className="form_title">돌아오신것을 환영해요!</p>
        <p className="form_subtitle">다시 만나다니 너무 반가워요!</p>

        <p>
          이메일 <span>★</span>
        </p>
        <input
          type="text"
          name="userId"
          value={userEmail}
          onChange={onChangeInput}
        ></input>
        <p>
          비밀번호 <span>★</span>
        </p>
        <input
          type="text"
          name="password"
          value={password}
          onChange={onChangeInput}
        ></input>
        <LoginBtn className="login_btn" onClick={onUserLogin}>
          로그인하기
        </LoginBtn>
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
