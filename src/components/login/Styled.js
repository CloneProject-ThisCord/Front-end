import styled from "styled-components";

export const LoginBtn = styled.button`
  background-color: #5865f2;
  border: none;
  color: white;
  border-radius: 10px;
  width: 450px;
  height: 50px;
  font-size: 22px;
  margin-top: 30px;
  margin-left: 50px;
  :hover {
    background-color: #3d46b0;
  }
`;

export const LoginInner = styled.form`
  margin-top: 50px;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  width: 750px;
  height: 350px;
  margin: 30px auto;

  p {
    margin-top: 15px;
    margin-left: 50px;
    font-size: 16px;
    color: darkgray;
    display: flex;
    align-items: center;
  }
  span {
    color: red;
    margin-left: 5px;
    font-size: 8px;
    margin-left: 5px;
  }
  input {
    margin-left: 50px;
    width: 450px;
    height: 40px;
    border: none;
    color: white;
    background-color: rgb(38, 35, 35);
    border-radius: 5px;
    font-size: 22px;
    ::placeholder {
      font-size: 1rem;
    }
  }
`;

export const LoginOuter = styled.section`
  width: 800px;
  height: 400px;
  border-radius: 10px;
  position: absolute;
  background-color: rgb(75, 73, 73);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  .form_subtitle,
  .form_title {
    margin: 0 auto;
  }
  .form_title {
    color: white;
    font-size: 28px;
  }
  .form_subtitle {
    color: darkgray;
    font-size: 20px;
  }
`;

export const SignUpBtn = styled.button`
  cursor: pointer;
  background: rgb(75, 73, 73);
  border: none;
  font-size: 16px;
  color: #4bb1ff;
  margin-left: 10px;
  :hover {
    text-decoration: underline;
  }
`;

export const SignUpInner = styled.form`
  margin-top: 50px;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 500px;
  margin: 30px auto;

  p {
    margin-top: 40px;
    margin-left: 50px;
    font-size: 16px;
    color: darkgray;
    display: flex;
    align-items: center;
  }
  span {
    color: red;
    margin-left: 5px;
    font-size: 8px;
    margin-left: 5px;
  }
  input {
    margin-left: 50px;
    width: 500px;
    height: 40px;
    border: none;
    color: white;
    background-color: rgb(38, 35, 35);
    border-radius: 5px;
    font-size: 22px;
  }
`;
export const SignUpOuter = styled.section`
  width: 600px;
  height: 600px;
  border-radius: 10px;
  position: absolute;
  background-color: rgb(75, 73, 73);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  .form_subtitle,
  .form_title {
    margin: 0 auto;
  }
  .form_title {
    color: white;
    font-size: 28px;
  }
  .form_subtitle {
    color: darkgray;
    font-size: 20px;
  }
  .goback_btn {
    position: absolute;
    bottom: 110px;
    left: 40px;
  }
  .discord_infrom {
    margin-left: 50px;
    font-size: 16px;
    color: darkgray;
  }
  a {
    text-decoration: none;
    color: #4bb1ff;
    :hover {
      text-decoration: underline;
    }
  }
`;
