import styled from "styled-components";

export const MainaBody = styled.section`
  position: relative;
  display: flex;
  margin: 0 auto;
  width: 1200px;
  background-color: #37393e;
  .chat {
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 100%;
    margin: 10px;
  }
  .chatInputDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 960px;
    padding: 10px;
    margin-left: 100px;
    border-top: 1px solid black;
    background-color: #40444b;
    height: 91px;
    box-sizing: border-box;

    input {
      border: 1px solid gray;
      width: 95%;
      height: 50px;
      background-color: #40444b;
      box-sizing: border-box;
      padding: 2% 2%;
      color: white;
      ::placeholder {
        font-size: 1.2rem;
        color: white;
      }
    }
    button {
      cursor: pointer;
      width: 50px;
      height: 50px;
      border: none;
      border-radius: 50px;
      margin-left: 10px;
      font-size: 18px;
      font-weight: 500;
    }
  }
`;

export const Mainaside = styled.aside`
  .sidebar_user_infrom {
    box-sizing: border-box;
    background: #2f3136;
    height: 91px;
    color: white;
    font-size: 22px;
    display: flex;
    align-items: center;
    .sidebar_user_name {
      margin-left: 8px;
      .sidebar_hashcode {
        font-size: 18px;
        color: darkgray;
      }
    }
    .sidebar_user_img {
      width: 50px;
      height: 50px;
      border-radius: 100px;
      background-color: green;
      display: flex;
      align-items: center;
      .status_img {
        width: 100%;
        height: 30px;
      }
    }
  }
  ul {
    list-style: none;
    width: 200px;
    height: 100vh;
    border: 1px solid;
    padding: 0% 0% 2% 2%;
    box-sizing: border-box;

    color: white;
    background-color: #202225;
    border: none;

    .ulTitle {
      width: 150px;
      height: 50px;
      border-left: none;
      border-right: none;
      line-height: 50px;
      text-align: center;
      border-radius: 0px;
      margin: 0px;
      background: none;
    }
    li {
      position: relative;
      width: 100px;
      height: 100px;
      line-height: 100px;
      text-align: center;
      border-radius: 60px;
      margin: 20px;
      background: #3c3f44;
    }
    .addServer {
      cursor: pointer;
      color: green;
      font-size: 1.5rem;
      :hover {
        background-color: green;
        color: white;
      }
    }
  }
`;
