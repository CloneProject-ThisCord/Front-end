import Modal from "../../components/main/Modal";
import "../../css/main.module.css";
import ChatMassege from "../../components/main/ChatMassege";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { MainaBody, Mainaside } from "./Styled";
import { useState, useRef, useEffect } from "react";
import { useInputs } from "../../core/hooks/useInputs";
import stompJS from "stompjs";
import sockjs from "sockjs-client";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import sweetAlert from "../../core/utils/sweetAlert";
import { __getDetailRooms } from "../../redux/modules/chatSlice";

const MainBody = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { roomId } = useParams();
  const modalRef = useRef(null);
  // 현재 유저 온라인 상태?
  const [live, setLive] = useState(false);
  // const { isLoading, error, chatRoom, chat, isSuccess } = useSelector(
  //   (state) => state.chat
  // );
  const [allSizeModalShow, setAllSizeModalShow] = useState(false);
  const [inputs, onChangeInput, clearInput] = useInputs();

  const modalOutSideClick = (e) => {
    if (modalRef.current === e.target || e.target.innerText === "뒤로가기") {
      //현재 ref는 모달 밖 영역 (onClick있음)
      //target은 눌린요소, 모달이 눌려도 ref.current와 다르기때문에 모달이 안닫힘
      //뒤로가기 버튼일때는 닫혀야함
      setAllSizeModalShow(false);
      return;
    }
  };

  const onEnter = (e) => {
    if (e.keyCode === 13 || e.shifKey === false) {
      // 엔터키 , shift+enter 막기
      //엔터키를 눌렀을때 emmit요청해야함
      console.log(message);
      clearInput();
    }
  };

  // useEffect(() => {
  // if (roomId) {
  //   //기존 메인페이지에서 유저가 오른쪽 사이드바에 방을 클릭했을시
  //   //main/id 가 있는 페이지로 이동하게됨
  //   //useParams를 통해 id값을 가져오고 id값이 있다면 채팅방에 연결하기
  //   console.log(roomId);
  //   const socket = new sockjs("url"); //소켓연결하기위한 서버 url연결
  //   const stompClient = stompJS.over(socket);
  //   return () => {
  //     if (stompClient) {
  //       // 이렇게 사용하면 되는지?
  //       console.log("trying Disconnect...");
  //       stompClient.disconnect(() => {});
  //     }
  //   };
  // }
  // }, []);

  // 채팅 메세지 보내기
  const sendMessage = () => {
    // stompClient
    // if (message.trimg() !== " ") {
    //   return sweetAlert(1000, "error", "내용을 입력해주세요");
    // }
    const data = {
      type: "TALK",
      // userId: userId,
      // username: username,
      //roomId:roomId,
      //roomName:roomName,
      // message: message,
      // connectedUsers: [], 연결된 사람들 목록
    };
    // stompClient.send("/pub/chat/send", {}, JSON.stringify(data));
    // clearInput();
  };

  //입장 메세지
  const joinMessage = () => {
    // const accessId = getCookie("id");
    // const accessName = getCookie("nickname");
    const data = {
      type: "ENTER",
      // userId: userEmail,
      // userName:userName ,
      // message: '',
    };
    // stompClient.send("/pub/chat/send", {}, JSON.stringify(data));
  };

  // useEffect(() => {
  //   dispatch(__getDetailRooms(roomId));
  // }, [dispatch]);
  const { message } = inputs;
  return (
    <MainaBody>
      <Mainaside>
        <ul>
          <li className="ulTitle">
            <p>쏘버 쏴이드 뢘더륑!</p>
          </li>
          <li>
            {/*채팅방 리스트 */}
            {/* <p onClick={navigate(`/main/${chatRooms.roomsId}`)}>안녕하세요</p> */}
            <p>안녕하세요</p>
          </li>
          <li
            className="addServer"
            onClick={() => {
              setAllSizeModalShow(true);
            }}
          >
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
      <div className="chat">
        <ul>
          <ChatMassege />
          <ChatMassege />
        </ul>
      </div>
      <div className="chatInputDiv">
        <input
          placeholder="# 입력 양식을 넣어주세요!"
          type="text"
          onKeyDown={onEnter}
          name="message"
          value={message}
          onChange={onChangeInput}
        />
        <button>확인</button>
      </div>

      {allSizeModalShow && (
        <Modal
          modalRef={modalRef}
          modalOutSideClick={modalOutSideClick}
          setAllSizeModalShow={setAllSizeModalShow}
        />
      )}
    </MainaBody>
  );
};

export default MainBody;
