import { SignUpBtn, SignUpInner, SignUpOuter, LoginBtn } from "./Styled";
import { userSignup } from "../../core/api/login";
import { useState, useEffect } from "react";
import { useInputs } from "../../core/hooks/useInputs";
import { useNavigate } from "react-router-dom";

const SignUpFrom = ({ onClickInformBtn }) => {
  const navigate = useNavigate();
  const [inputs, onChangeInput, clearInput] = useInputs();
  const { userEmail, password, nickName } = inputs;

  useEffect(() => {
    clearInput();
  }, []);

  const onUserSignup = (e) => {
    e.preventDefault();
    const newUser = {
      userEmail: userEmail,
      nickName: nickName,
      password: password,
    };
    userSignup(newUser).then((res) => {
      localStorage.setItem("name", res.headers.authorization);
      navigate("/login");
    });
  };

  return (
    <SignUpOuter>
      <SignUpInner>
        <p className="form_title">계정 만들기</p>
        <p>이메일</p>
        <input type="text" name="userEmail" onChange={onChangeInput} />
        <p>사용자명</p>
        <input type="text" name="nickName" onChange={onChangeInput} />
        <p>비밀번호</p>
        <input type="password" name="password" onChange={onChangeInput} />
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
