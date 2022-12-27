import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ".././css/login.css";
import sweetAlert from "../core/utils/sweetAlert";
import LoginFrom from "../components/login/LoginForm";
import SignUpFrom from "../components/login/SignUpForm";

const Login = () => {
  const [isSingup, setIsSingup] = useState(false);

  const [isCheckInform, setIsCheckInform] = useState({
    userIdCheck: false,
    nickNameCheck: false,
  });

  // const { userIdCheck, nickNameCheck } = isCheckInform;

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
      <div className="loginpage_img1"></div>
      <div className="loginpage_img2"></div>
      {isSingup ? (
        <SignUpFrom onClickInformBtn={onClickInformBtn} />
      ) : (
        <LoginFrom onClickInformBtn={onClickInformBtn} />
      )}
      <BG />
    </>
  );
};

const BG = styled.div`
  background-color: #5865f2;
  width: 100%;
  top: 0;
  position: absolute;
  height: 100%;
  z-index: -9999;
`;

export default Login;
