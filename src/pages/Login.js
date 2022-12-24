import styled from "styled-components";
import { useState, useEffect } from "react";
import ".././css/login.css";
import { useInputs } from "../core/hooks/useInputs";
import { userLogin } from "../core/api/login";
import sweetAlert from "../core/utils/sweetAlert";
import LoginFrom from "../components/Login/LoginForm";
import SignUpFrom from "../components/Login/SignUpForm";

const BG = styled.div`
  background-color: #5865f2;
  width: 100%;
  top: 0;
  position: absolute;
  height: 100%;
  z-index: -9999;
`;

const Login = () => {
  const [isSingup, setIsSingup] = useState(false);
  const [inputs, onChangeInput, clearInput, setInputs] = useInputs();
  const [isCheckInform, setIsCheckInform] = useState({
    userIdCheck: false,
    nickNameCheck: false,
  });

  const { userIdCheck, nickNameCheck } = isCheckInform;
  const { userId, password, passwordCheck, nickName } = inputs;

  useEffect(() => {
    clearInput();
  }, []);

  const onSubmitUser = (e) => {
    e.preventDefault();
    const newUser = {
      userName: userId,
      nickName: nickName,
      password: password,
    };
    console.log(newUser);
  };

  const is_blank = (asValue) => {
    const blank_pattern = /[\s]/g;
    if (blank_pattern.test(asValue)) {
      sweetAlert(1000, "error", "공백을 제거해주세요");
      return;
    }
  };

  const is_userId = (asValue) => {
    if (is_blank) {
      sweetAlert(1000, "error", "공백을 제거해주세요");
      return;
    }
    const regExp = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W)\.{4,15}$/;
    //   아이디는 최소 4자 이상, 15자 이하 알파벳 대소문자(a-z, A-Z), 숫자(0-9)로 구성됩니다.
    return regExp.test(asValue);
  };

  const is_username = (asValue) => {
    const regExp = /^[a-zA-Z0-9]{4,12}$/;
    //   닉네임은 최소 4자 이상, 12자 이하 알파벳 대소문자(a-z, A-Z), 숫자(0-9)로 구성됩니다.
    return regExp.test(asValue);
  };

  const is_password = (asValue) => {
    const regExp = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,20}$/;

    //   비밀번호는 최소 8자 이상, 20자 이하 알파벳 대소문자, 숫자(0-9), 특수문자로 구성됩니다."

    return regExp.test(asValue);
  };

  const onClickUserIdCheck = (userId) => () => {
    if (is_userId(userId)) {
      console.log(true);
      console.log(userId);
    } else {
      console.log(false);
      console.log(userId);
    }
    // userLogin(userId);
  };

  const onClickInformBtn = (e) => {
    e.preventDefault();
    if (
      isSingup &&
      !window.confirm("가입정보가 사라질 수 있습니다. 정말 돌아가시겠습니까?")
    )
      return;
    setIsSingup(!isSingup);
  };

  return (
    <>
      {isSingup ? (
        <SignUpFrom onClickInformBtn={onClickInformBtn} />
      ) : (
        <LoginFrom onClickInformBtn={onClickInformBtn} />
      )}

      <BG />
    </>
  );
};

export default Login;
