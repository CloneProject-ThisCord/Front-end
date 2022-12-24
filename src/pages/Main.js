import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ChatMassege from "../components/main/ChatMassege";

const Main = () => {
  return (
    <>
      <HeaderSection className="header">
        <nav className="header_inner">
          <div className="header_chatname">
            채팅방이름: 항해99기 클론프로젝트
          </div>
          <div className="header_serch">
            <span className="header_search_span">
              <input type="text" placeholder="검색하기" />
              <p>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </p>
            </span>
            <button className="header_logout_btn">로그아웃하기</button>
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
            <li className="addServer">
              <FontAwesomeIcon icon={faPlus} />
            </li>
          </ul>
        </Mainaside>
        <MainaBody>
          <div className="chat">
            <ul>
              <ChatMassege />
              <ChatMassege />
            </ul>
          </div>
          <div className="chatInputDiv">
            <input placeholder="# 입력 양식을 넣어주세요!" />
            <button>내용</button>
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
  width: 90%;
  height: 62px;
  position: absolute;
  top: 0;
  left: 10.5%;
  background-color: #37393e;
  color: white;
  border-bottom: 1px solid black;
  .header_inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1000px;
    box-sizing: border-box;
    margin: auto;
    padding: 1% 1%;
    .header_chatname {
      font-size: 22px;
    }
    .header_serch {
      .header_search_span {
        background: #202225;
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

      .header_logout_btn {
        width: 100px;
        border: none;
        font-size: 15px;
        margin-left: 50px;
      }
    }
  }
`;

const MainSection = styled.section`
  display: flex;
  flex-direction: row;
  padding-top: 3.2%;
  background-color: #202225;
`;

const Mainaside = styled.aside`
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
  width: 80%;
  height: 100vh;
  background-color: #37393e;
  .chat {
    height: 90%;
  }
  .chatInputDiv {
    height: 10%;
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
      width: 50px;
      height: 50px;
      border: none;
      border-radius: 50px;
      margin-left: 10px;
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
