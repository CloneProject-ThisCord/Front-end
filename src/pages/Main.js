import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faShareFromSquare,
  faCircleRight,
  faFaceSmile,
  faFaceFrown,
} from "@fortawesome/free-solid-svg-icons";
import MainBody from "../components/main/MainBody";
import "../css/main.module.css";

const Main = () => {
  return (
    <>
      <HeaderSection className="header">
        <nav className="header_inner">
          <div className="header_chatname">
            <span className="header_chatname_span">채팅방이름 :</span> 항해99기
            클론프로젝트
            <div className="header_serch">
              <span className="header_search_span">
                <input type="text" placeholder="검색하기" />
                <p>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </p>
              </span>
              <button className="header_nav_btn">
                <FontAwesomeIcon className="Out" icon={faShareFromSquare} />
                대화방 나가기
              </button>
              <button className="header_nav_btn">
                <FontAwesomeIcon className="Out" icon={faCircleRight} />
                로그아웃하기
              </button>
            </div>
          </div>
        </nav>
      </HeaderSection>
      <MainSection>
        {/* mainBody컴포넌트 */}
        <MainBody />
        <Mainaside2>
          <div className="asideOne">
            <h3>
              <FontAwesomeIcon className="OnOffLine" icon={faFaceSmile} />
              온라인상태
            </h3>
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
            <h3>
              <FontAwesomeIcon className="OnOffLine" icon={faFaceFrown} />
              오프라인상태
            </h3>
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
  width: 100%;
  height: 62px;
  background-color: #37393e;
  color: white;
  .header_inner {
    display: flex;

    width: 1200px;
    box-sizing: border-box;
    margin: auto;
    .header_chatname {
      width: 100%;
      font-size: 22px;
      margin: 20px auto;
      display: flex;
      justify-content: space-between;
      .header_chatname_span {
        font-weight: 500;
      }
      .header_serch {
        display: flex;
        justify-content: space-around;
        flex-wrap: nowrap;
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
          width: 145px;
          color: white;
          border: none;
          background: #37393e;
          font-size: 18px;
          margin-left: 50px;
          box-sizing: border-box;
          :hover {
            color: rgb(63, 121, 63);
          }
          .Out {
            padding: 1% 3%;
          }
        }
      }
    }
  }
`;

const MainSection = styled.section`
  display: flex;
  border-top: 0.5px solid black;
  background-color: #202225;
`;

const Mainaside2 = styled.aside`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 110vh;
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
      .OnOffLine {
        padding: 0 2%;
      }
    }
  }
  .asideOff {
    height: 50%;
    h3 {
      padding: 5% 5%;
      box-sizing: border-box;
      .OnOffLine {
        padding: 0 2%;
      }
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
