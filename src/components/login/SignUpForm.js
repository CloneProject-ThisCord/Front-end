import { SignUpBtn, SignUpInner, SignUpOuter, LoginBtn } from "./Styled";
import { userSignup } from "../../core/api/login";
import { useState, useEffect } from "react";
import { useInputs } from "../../core/hooks/useInputs";
import { useNavigate } from "react-router-dom";
import sweetAlert from "../../core/utils/sweetAlert";

const SignUpFrom = ({ onClickInformBtn }) => {
  const navigate = useNavigate();
  const [inputs, onChangeInput, clearInput] = useInputs();
  const { userEmail, password, nickName } = inputs;

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

  const is_username = (asValue) => {
    const regExp = /^[a-zA-Z0-9]{4,12}$/;
    //   닉네임은 최소 4자 이상, 12자 이하 알파벳 대소문자(a-z, A-Z), 숫자(0-9)로 구성됩니다.

    return regExp.test(asValue);
  };

  const onUserSignup = (e) => {
    e.preventDefault();
    const maxlength = 20;
    const minlength = 7;
    const blankExp = /[\s]/g;
    if (blankExp.test(userEmail)) {
      return sweetAlert(1000, "error", "공백을 제거해주세요");
    }

    if (is_userId(userEmail) === false) {
      sweetAlert(1000, "error", "이메일 형식이 맞지 않습니다.");
      return;
    }

    if (is_username(nickName) === false) {
      return sweetAlert(
        1000,
        "error",
        "비밀번호는 최소 6자 이상, 18자 이하의 알파벳 소문자, 숫자여야 합니다"
      );
    }

    if (
      password.length < minlength ||
      password.length > maxlength ||
      password.trim() === ""
    ) {
      console.log("password", password);
      return sweetAlert(
        1000,
        "error",
        "비밀번호는 최소 8자 이상, 20자 이하의 알파벳 대소문자, 숫자, 특수문자여야 합니다"
      );
    }

    const newUser = {
      userEmail: userEmail,
      nickName: nickName,
      password: password,
    };
    userSignup(newUser).then((res) => {
      sweetAlert(1000, "success", "회원가입 성공");
      localStorage.setItem("id", res.headers.authorization);
      navigate("/login");
    });
  };
  return (
    <SignUpOuter>
      <SignUpInner>
        <p className="form_title">계정 만들기</p>
        <p>이메일</p>
        <input
          type="text"
          name="userEmail"
          value={userEmail || ""}
          placeholder="'@' '.' 이 들어간 정상적인 이메일 형식"
          onChange={onChangeInput}
        />
        <p>사용자명</p>
        <input
          type="text"
          name="nickName"
          value={nickName || ""}
          placeholder="최소 4자 이상, 12자 이하 알파벳 대소문자와 숫자"
          onChange={onChangeInput}
        />
        <p>비밀번호</p>
        <input
          type="password"
          name="password"
          value={password || ""}
          placeholder="최소 8자 이상, 20자 이하의 알파벳 대소문자, 숫자, 특수문자"
          onChange={onChangeInput}
        />
        <LoginBtn
          style={{ marginTop: "40px", width: "500px" }}
          className="continue_btn"
          onClick={onUserSignup}
        >
          계속하기
        </LoginBtn>
      </SignUpInner>
      <SignUpBtn className="goback_btn" onClick={onClickInformBtn}>
        이미 계정이 있으신가요?
      </SignUpBtn>
      <p className="discord_infrom">
        등록하는 순간 Discord의
        <a href="https://discord.com/terms">서비스 이용 약관</a>와
        <a href="https://discord.com/privacy">개인정보 보호 정책</a>에 동의하게
        됩니다
      </p>
    </SignUpOuter>
  );
};

export default SignUpFrom;
