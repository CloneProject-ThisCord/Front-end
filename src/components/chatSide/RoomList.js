import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RoomList = ({ room }) => {
  const navigate = useNavigate();
  const goRoom = () => {
    navigate(`/main/:roomId=${room.roomId}`);
  };
  //채팅방 서버이름 만들때 글자수 제한 걸어야 할듯
  return (
    <ChatServer onClick={goRoom}>
      {/*채팅방 리스트 */}
      <img src={room.roomPic} />
      <p>{room.roomName}</p>;
    </ChatServer>
  );
};

const ChatServer = styled.li`
  position: relative;
  overflow: hidden;
  img {
    border-radius: 100px;
    width: 100%;
    z-index: -9999;
    opacity: 70%;
  }
  p {
    top: 0;
    font-weight: 900;
    font-size: 20px;
    height: ;
    position: absolute;
    z-index: 11;
    color: black;
  }
`;

export default RoomList;
