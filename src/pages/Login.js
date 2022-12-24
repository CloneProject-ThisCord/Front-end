import Lottie from "lottie-react";
import { loginside_image } from "../assets";
import styled from "styled-components";
import { useState, useEffect } from "react";
import ".././css/login.css";
import { useInputs } from "../core/hooks/useInputs";
import { userLogin } from "../core/api/login";
import sweetAlert from "../core/utils/sweetAlert";

const LoginBtn = styled.button`
  background-color: blue;
  border: none;
  border-radius: 10px;
  width: 150px;
  height: 50px;
  font-size: 24px;
  :hover {
    background-color: rgb(226, 182, 245);
  }
`;

const BG = styled.div`
  background-color: #5865f2;
  width: 100%;
  top: 0;
  position: absolute;
  height: 100%;
  z-index: -9999;
`;

const FormInner = styled.form`
  margin-top: 50px;
  margin-left: 60px;
  width: 400px;
  font-size: 22px;

  p {
    margin-top: 15px;
  }
  input {
    margin-top: 10px;
    width: 350px;
    height: 40px;
    border: 2px solid black;
    border-radius: 10px;
    font-size: 22px;
  }
  .login_btn {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    .login_signup_btn {
      cursor: pointer;
      width: 250px;
      background-color: white;
      font-size: 20px;
      height: 20px;
      margin-top: 40px;
      :hover {
        text-decoration: underline;
      }
    }
  }
  .signup_btn {
    margin-left: 15px;
    margin-top: 50px;
    .goback_btn {
      margin-left: 30px;
    }
  }
`;

const Inner = styled.section`
  width: 800px;
  height: 400px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  text-align: center;
  .form_title {
    color: white;
    font-size: 28px;
  }
  .form_subtitle {
    color: darkgray;
    font-size: 20px;
  }
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
      <Inner className="form_wrapper">
        <div className="form_inner">
          <p className="form_title">돌아오신것을 환영해요!</p>
          <p className="form_subtitle">다시 만나다니 너무 반가워요!</p>
          <p>이메일 ★</p>
          <input type="text"></input>
          <p>비밀번호 ★</p>
          <input type="text"></input>
          <p>비밀번호를 잊으셨나요?</p>
        </div>
      </Inner>

      <BG />
    </>
  );
};

export default Login;
