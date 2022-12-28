import Modal from "../../components/main/Modal";
import "../../css/main.module.css";
import ChatMassege from "../../components/main/ChatMassege";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPaperPlane,
  faRectangleList,
} from "@fortawesome/free-solid-svg-icons";
import { MainaBody, Mainaside } from "./Styled";
import { useState, useRef, useEffect } from "react";
import { useInputs } from "../../core/hooks/useInputs";
import stompJS from "stompjs";
import sockjs from "sockjs-client";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import sweetAlert from "../../core/utils/sweetAlert";
import {
  __getDetailRooms,
  __getRooms,
  __getMassages,
  addMessage,
} from "../../redux/modules/chatSlice";
import RoomList from "../chatSide/RoomList";

const MainBody = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const { roomId } = useParams();
  const { isLoading, error, chatRoomList, chatRoom, chat, isSuccess } =
    useSelector((state) => state.chat);

  // if (!isLoading) {
  //   console.log("현재방", chatRoom);
  //   console.log("채팅정보", chat);
  // }
  const socket = new sockjs(`http://13.209.15.249/ws/chat`); //소켓연결하기위한 서버 url연결
  const stompClient = stompJS.over(socket);
  const token = localStorage.getItem("id");
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

  // 방정보 가져오기
  useEffect(() => {
    dispatch(__getRooms());
  }, []);

  // // 아전 채팅 내용 가져오기
  // useEffect(() => {
  //   if (roomId) {
  //     dispatch(__getMassages(roomId));
  //   }
  // }, []);

  // // 렌더링 될 때마다 연결,구독 다른 방으로 옮길 때 연결, 구독 해제

  // useEffect(() => {
  //   console.log(roomId);
  //   if (roomId) return;
  //   if (!roomId) {
  //     wsConnectSubscribe();
  //     return () => {
  //       leaveMessage();
  //       wsDisConnectUnsubscribe();
  //     };
  //   }
  // }, [roomId]);

  // 웹소켓 연결, 구독
  function wsConnectSubscribe() {
    //ws클라이언트 객체에 첫번째인자에 토큰을 전달,
    //두번째 인자로는 콜백함수 sub를 통해 socket 연결을 요청
    //소켓에서, 즉 서버에서 주는 data를 통해 기존에 있던 message를 가져옴?
    //getMessagae를 통해 기존에 있던 message들을 받아옴?
    //sub동작 그안에서 두번째 인자로는 token을 입력?
    try {
      stompClient.connect(
        {
          token: token,
        },
        () => {
          stompClient.subscribe(
            `/chat/rooms/${roomId}`,
            (data) => {
              const newMessage = JSON.parse(data.body);
              dispatch(addMessage(newMessage));
              // 이부분은 어떤 동작을 하는 구문을 넣어줘야하는지?
              // 방정보의 메세지를 가져오면되는건지?
            },
            { token: token }
          );
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  // //연결해제, 구독해제
  function wsDisConnectUnsubscribe() {
    //연결을 끊어졌을때의 함수?
    //unsubscribe는 어떤 동작? 인자는 sub-0왜?

    try {
      stompClient.disconnect(
        () => {
          stompClient.unsubscribe("sub-0");
        },
        { token: token }
      );
    } catch (error) {
      console.log(error);
    }
  }

  // // 채팅 메세지 보내기
  const sendMessage = () => {
    // stompClient
    // if (!token) {
    //    return sweetAlert(1000, "error", "페이지 오류 다시 로그인 해주세요");
    //   navigate("/");
    // }

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
      // 연결된 사람이나 오프라인정보는 리액트에서만 처리가능할까?
    };
    // stompClient.send("/pub/chat/message", {token:token}, JSON.stringify(data));
    // clearInput();
  };

  //입장 메세지
  const joinMessage = () => {
    // const userEmail = getCookie("id");
    // const userName = getCookie("nickname");
    const data = {
      type: "ENTER",
      // userId: userEmail,
      // userName:userName ,
      // message: '',
    };
    // stompClient.send("/pub/chat/send",{token:token} ,JSON.stringify(data));
  };

  const leaveMessage = () => {
    // const userEmail = getCookie("id");
    // const userName = getCookie("nickname");
    const data = {
      type: "OUIT",
      // userId: userEmail,
      // userName:userName ,
      // message: '',
    };
    // stompClient.send("/pub/chat/send",{token:token} ,JSON.stringify(data));
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
            <p>
              <FontAwesomeIcon className="list" icon={faRectangleList} />
              채팅 서버 목록
            </p>
          </li>
          {chatRoomList &&
            chatRoomList.map((room) => {
              return (
                <RoomList key={room.roomId} room={room}>
                  {/*채팅방 리스트 */}
                </RoomList>
              );
            })}

          <li
            className="addServer"
            onClick={() => {
              setAllSizeModalShow(true);
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </li>
        </ul>
        {/* <div className="sidebar_user_infrom">
          <div className="sidebar_user_img">
            <img src="/image/statusIMG.png" className="status_img"></img>
          </div>
          <p className="sidebar_user_name">
            중꺽마 <span className="sidebar_hashcode">#2132</span>
          </p>
        </div> */}
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
        <button>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
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
