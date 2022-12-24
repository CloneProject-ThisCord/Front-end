import { SignUpBtn, SignUpInner, SignUpOuter, LoginBtn } from "./Styled";

const SignUpFrom = ({ onClickInformBtn }) => {
  return (
    <SignUpOuter>
      <SignUpInner>
        <p className="form_title">계정 만들기</p>
        <p>이메일</p>
        <input type="text" />
        <p>사용자명</p>
        <input type="text" />
        <p>비밀번호</p>
        <input type="password" />
        <LoginBtn style={{ marginTop: "40px" }} className="continue_btn">
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
