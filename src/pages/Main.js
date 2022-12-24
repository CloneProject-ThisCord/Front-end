import styled from "styled-components";

const Main = () => {
  return (
    <>
      <MainSection>
        <ul>
          <li className="ulTitle">
            <p>쏘버 쏴이드 뢘더륑!</p>
          </li>
          <li>
            <p>안녕하세요</p>
          </li>
          <li>
            <p>안녕하세요</p>
          </li>
          <li>
            <span></span>
            <span></span>
          </li>
        </ul>
      </MainSection>
    </>
  );
};

const MainSection = styled.aside`
  ul {
    list-style: none;
    width: 150px;
    height: 100vh;
    border: 1px solid;
    padding: 0% 0% 2% 0%;
    .ulTitle {
      width: 150px;
      height: 50px;
      border-left: none;
      border-right: none;
      line-height: 50px;
      text-align: center;
      border-radius: 0px;
      margin: 0px;
    }
    li {
      position: relative;
      width: 100px;
      height: 100px;
      border: 1px solid black;
      line-height: 100px;
      text-align: center;
      border-radius: 60px;
      margin: 20px;
      span {
        display: block;
        position: absolute;
        width: 50px;
        height: 5px;
        background: black;
        top: 45%;
        left: 25%;
        :nth-child(1) {
          rotate: 90deg;
        }
      }
    }
  }
`;
export default Main;
