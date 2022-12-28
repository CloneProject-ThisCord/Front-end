import React from "react";

import styled from "styled-components";

// Components
import MessageList from "./MessageList";
import MessageWrite from "./MessageWrite";
import ChatList from "./ChatList";

// elements
import { ChatName } from "../elements";

// 채팅 관련 함수들 가져오기
import { chatActions } from "../redux/modules/chat";

// 쿠키
import { getCookie } from "../shared/cookie";

// 리덕스
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configureStore";

// 소켓 통신
import Stomp from "stompjs";
import SockJS from "sockjs-client";

// components
import NoRoom from "./NoRoom";

// 채팅 방 컴포넌트
const ChattingRoom = (props) => {
  // 소켓 통신 객체
  const sock = new SockJS("http://52.79.54.15/chatting");
  const ws = Stomp.over(sock);

  // 방 제목 가져오기
  const { roomName, category } = useSelector((state) => state.chat.currentChat);
  const roomId = useSelector((state) => state.chat.currentChat.roomId);

  // 토큰
  const token = getCookie("access-token");
  const dispatch = useDispatch();

  // 보낼 메시지 텍스트
  const messageText = useSelector((state) => state.chat.messageText);
  // sedner 정보 가져오기
  let sender = useSelector((state) => state.user.userInfo?.username);
  if (!sender) {
    sender = getCookie("username");
  }

  // 렌더링 될 때마다 연결,구독 다른 방으로 옮길 때 연결, 구독 해제
  React.useEffect(() => {
    wsConnectSubscribe();
    return () => {
      wsDisConnectUnsubscribe();
    };
  }, [roomId]);

  // 웹소켓 연결, 구독
  function wsConnectSubscribe() {
    //ws클라이언트 객체에 첫번째인자에 토큰을 전달,
    //두번째 인자로는 콜백함수 sub를 통해 socket 연결을 요청
    //소켓에서, 즉 서버에서 주는 data를 통해 기존에 있던 message를 가져옴?
    //getMessagae를 통해 기존에 있던 message들을 받아옴?
    //sub동작 그안에서 두번째 인자로는 token을 입력?
    try {
      ws.connect(
        {
          token: token,
        },
        () => {
          ws.subscribe(
            `/sub/api/chat/rooms/${roomId}`,
            (data) => {
              const newMessage = JSON.parse(data.body);
              dispatch(chatActions.getMessages(newMessage));
            },
            { token: token }
          );
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  // 연결해제, 구독해제
  function wsDisConnectUnsubscribe() {
    //연결을 끊어졌을때의 함수?
    //unsubscribe는 어떤 동작? 인자는 sub-0왜?

    try {
      ws.disconnect(
        () => {
          ws.unsubscribe("sub-0");
          //써보면 알수 있을 듯!
          //내장되어 있는 느낌!
        },
        { token: token }
      );
    } catch (error) {
      console.log(error);
    }
  }

  // 웹소켓이 연결될 때 까지 실행하는 함수
  function waitForConnection(ws, callback) {
    //웹소켓이 연결될때까지 비동기처리로 기다리는 상항을처리?
    //웹소켓 연결을 하는 것 자체가 굉장히 불안전함
    //연결이 안되었을시에 디도스급 에러 발생
    //브로큰 파이프 발생!
    //서버를 다시 파는 상황이 나올 수도 있음!
    //소켓을 안쓰고도 채팅구현이 가능
    //폴링식으로도 구현이 가능
    setTimeout(
      function () {
        // 연결되었을 때 콜백함수 실행
        if (ws.ws.readyState === 1) {
          callback();
          // 연결이 안 되었으면 재호출
        } else {
          waitForConnection(ws, callback);
        }
      },
      1 // 밀리초 간격으로 실행
    );
  }

  // 메시지 보내기
  function sendMessage() {
    try {
      // token이 없으면 로그인 페이지로 이동
      if (!token) {
        alert("토큰이 없습니다. 다시 로그인 해주세요.");
        history.replace("/");
      }
      // send할 데이터
      const data = {
        type: "TALK",
        roomId: roomId,
        sender: sender,
        message: messageText,
      };
      // 빈문자열이면 리턴
      if (messageText === "") {
        return;
      }
      // 로딩 중
      dispatch(chatActions.isLoading());
      waitForConnection(ws, function () {
        ws.send(
          "/pub/api/chat/message",
          { token: token },
          JSON.stringify(data)
        );
        console.log(ws.ws.readyState);
        dispatch(chatActions.writeMessage(""));
      });
    } catch (error) {
      console.log(error);
      console.log(ws.ws.readyState);
    }
  }

  // 나가기 상태 보여주기
  //나가기 상태? 디스코드에서는 로그아웃된 유저들을 말하는?
  const outRoomStat = useSelector((state) => state.chat.chatOut);

  if (outRoomStat === true) {
    return (
      <Container>
        <ChatList prevRoomId={roomId} />
        <NoRoom />
      </Container>
    );
  }

  return (
    <Container>
      <ChatList prevRoomId={roomId} />
      {!roomId && <NoRoom />}
      {roomId && (
        <ChatWrap>
          <ChatName roomName={roomName} category={category} />
          <MessageList />
          <MessageWrite sendMessage={sendMessage} />
        </ChatWrap>
      )}
    </Container>
  );
};

const Container = styled.div`
  ${(props) => props.theme.border_box};
  ${(props) => props.theme.flex_row}
  width: 100%;
  height: 100%;
  background-color: white;

  color: ${(props) => props.theme.theme_yellow};

  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
  }
`;

const ChatWrap = styled.div`
  ${(props) => props.theme.flex_column}
  width: 70%;
  height: 100%;

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    height: 85%;
  }
`;

export default ChattingRoom;
