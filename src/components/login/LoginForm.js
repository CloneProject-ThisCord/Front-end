import styled from "styled-components";
import { LoginBtn, LoginInner, LoginOuter, SignUpBtn } from "./Styled";
const LoginFrom = ({ onClickInformBtn }) => {
  return (
    <LoginOuter className="form_wrapper">
      <LoginInner className="form_inner">
        <p className="form_title">돌아오신것을 환영해요!</p>
        <p className="form_subtitle">다시 만나다니 너무 반가워요!</p>

        <p>
          이메일 <span>★</span>
        </p>
        <input type="text"></input>
        <p>
          비밀번호 <span>★</span>
        </p>
        <input type="text"></input>
        <LoginBtn className="login_btn">로그인하기</LoginBtn>
        <p>
          계정이 필요한가요?{" "}
          <SignUpBtn onClick={onClickInformBtn}>가입하기</SignUpBtn>
        </p>
        <div className="discor_img"></div>
      </LoginInner>
    </LoginOuter>
  );
};

export default LoginFrom;
