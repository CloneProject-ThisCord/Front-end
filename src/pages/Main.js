import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ChatMassege from "../components/main/ChatMassege";
import { useState } from "react";
import Modal from "../components/main/Modal";
import "../css/main.module.css";

const Main = () => {
  const [isCreateServer, setCreateServer] = useState(false);
  const onClickCreateChatServer = (e) => {
    setCreateServer(!isCreateServer);
  };

  return (
    <>
      <HeaderSection className="header">
        <nav className="header_inner">
          <div className="header_chatname">
            채팅방이름: 항해99기 클론프로젝트
            <div className="header_serch">
              <span className="header_search_span">
                <input type="text" placeholder="검색하기" />
                <p>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </p>
              </span>
              <button className="header_nav_btn">대화방 나가기</button>
              <button className="header_nav_btn">로그아웃하기</button>
            </div>
          </div>
        </nav>
      </HeaderSection>
      <MainSection>
        <Mainaside>
          <ul>
            <li className="ulTitle">
              <p>쏘버 쏴이드 뢘더륑!</p>
            </li>
            <li>
              <p>안녕하세요</p>
            </li>
            <li className="addServer" onClick={onClickCreateChatServer}>
              <FontAwesomeIcon icon={faPlus} />
            </li>
          </ul>
          <div className="sidebar_user_infrom">
            <div className="sidebar_user_img">
              <img src="/image/statusIMG.png" className="status_img"></img>
            </div>
            <p className="sidebar_user_name">
              중꺽마 <span className="sidebar_hashcode">#2132</span>
            </p>
          </div>
        </Mainaside>
        <MainaBody>
          {isCreateServer ? (
            <Modal onClickCreateChatServer={onClickCreateChatServer} />
          ) : null}
          <div className="chat">
            <ul>
              <ChatMassege />
              <ChatMassege />
            </ul>
          </div>
          <div className="chatInputDiv">
            <input placeholder="# 입력 양식을 넣어주세요!" />
            <button>확인</button>
          </div>
        </MainaBody>
        <Mainaside2>
          <div className="asideOne">
            <h3>온라인상태</h3>
            <ul>
              <OnlineList>
                <p>
                  <img alt="이미지" />
                  내생첫코
                </p>
              </OnlineList>
            </ul>
          </div>
          <div className="asideOff">
            <h3>오프라인상태</h3>
            <ul>
              <OnlineList>
                <p>
                  <img alt="이미지" />
                  니생 첫코
                </p>
              </OnlineList>
            </ul>
          </div>
        </Mainaside2>
      </MainSection>
    </>
  );
};
const HeaderSection = styled.header`
  height: 62px;
  background-color: #37393e;
  color: white;
  .header_inner {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    box-sizing: border-box;
    margin: auto;
    .header_chatname {
      width: 1000px;
      font-size: 22px;
      margin: 20px auto;
      display: flex;
      justify-content: space-between;
      .header_serch {
        .header_search_span {
          background-color: #202225;
          input {
            width: 150px;
            transition: 0.5s;
            background: none;
            border: none;
            :focus {
              width: 250px;
            }
          }
          p {
            display: inline-block;
            padding-left: 15px;
          }
        }

        .header_nav_btn {
          cursor: pointer;
          width: 110px;
          color: white;
          border: none;
          background: #37393e;
          font-size: 18px;
          margin-left: 50px;
          :hover {
            color: rgb(63, 121, 63);
          }
        }
      }
    }
  }
`;

const MainSection = styled.section`
  display: flex;
  padding-top: 30px;
  background-color: #202225;
`;

const Mainaside = styled.aside`
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
    padding: 0% 0% 2% 9%;
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

const MainaBody = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 1200px;
  background-color: #37393e;
  .chat {
    height: 90%;
  }
  .chatInputDiv {
    display: flex;
    border-top: 1px solid black;
    background-color: #40444b;
    padding: 2% 2%;
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

const Mainaside2 = styled.aside`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100vh;
  background-color: #2f3136;
  color: white;
  li {
    list-style: none;
  }
  .asideOne {
    height: 50%;
    h3 {
      padding: 5% 5%;
      box-sizing: border-box;
    }
  }
  .asideOff {
    height: 50%;
    h3 {
      padding: 5% 5%;
      box-sizing: border-box;
    }
  }
`;
const OnlineList = styled.li`
  padding: 1% 1%;
  box-sizing: border-box;
  p {
    padding: 2% 3%;
  }
`;
export default Main;
