import styled from "styled-components";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";

const Modal = ({ onClickCreateChatServer }) => {
  const [image, setImage] = useState();
  const modal = useRef();
  const [isOpen, setOpen] = useState(false);

  const handleCloseModal = (e) => {
    if (isOpen && (!modal.current || !modal.current(e.target))) setOpen(false);
  };

  // useEffect(() => {
  //   window.addEventListener("click");
  //   return () => {
  //     window.removeEventListener("click");
  //   };
  // });

  const onChnageImage = (e) => {
    const file = e.target.files[0];
    let reader = new FileReader(); //비동기 처리
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  return (
    <ModalBox className="modal" ref={modal}>
      <p className="modal_title">서버 커스터 마이징하기</p>
      <p className="modal_inform">
        새로운 서버에 이름과 아이콘을 부여해 개성을 드러내보세요.
      </p>

      <div className="modal_camera_box">
        {image ? null : (
          <>
            <FontAwesomeIcon icon={faCamera} />
            <p className="modal_camera_upload">UPLOAD</p>{" "}
          </>
        )}

        {image ? (
          <ModalImg
            src={image}
            alt="upload할 사진"
            className="modal_upload_img"
            display="block"
          />
        ) : (
          <ModalImg src={image} className="modal_upload_img" />
        )}
        <input
          type="file"
          className="modal_file_input"
          name="imgae"
          onChange={onChnageImage}
        />
      </div>

      <div className="modal_server_box">
        <p className="modal_server_title">서버 이름</p>
        <input type="text" className="modal_server_input" />
        <p>
          서버를 만들면 Discord의
          <a href="https://discord.com/guidelines"> 커뮤니티 지침</a>에 동의하게
          됩니다.
        </p>
      </div>
      <ModalBtn
        style={{ background: "white", left: 0 }}
        onClick={onClickCreateChatServer}
      >
        뒤로가기
      </ModalBtn>
      <ModalBtn
        style={{
          background: "white",
          right: "30px",
          background: "#5865f2",
          color: "white",
        }}
      >
        만들기
      </ModalBtn>
    </ModalBox>
  );
};

const ModalImg = styled.img`
  display: ${(props) => props.display || "none"};
  border-radius: 100px;
`;

const ModalBtn = styled.button`
  cursor: pointer;
  border: none;
  font-size: 20px;
  color: black;
  position: absolute;
  bottom: 15px;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  .modal_goback_btn {
    background-color: white;
    left: 0;
  }
  .modal_create_btn {
    background-color: #5865f2;
    right: 30px;
    color: white;
  }
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 450px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  a {
    text-decoration: none;
    font-weight: 500;
    color: #0d79cb;
    :hover {
      text-decoration: underline;
    }
  }
  .modal_camera_box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 30px;
    position: absolute;
    border: 5px dashed black;
    border-radius: 100px;
    width: 150px;
    height: 150px;
    top: 200px;
    left: 50%;
    transform: translate(-50%, -50%);

    .modal_file_input {
      position: absolute;
      width: 150px;
      height: 150px;
      opacity: 0;
    }
    .modal_camera_upload {
      text-align: center;
      font-size: 18px;
    }
  }
  .modal_title {
    font-size: 24px;
    font-weight: 600;
    margin-top: 15px;
    margin-bottom: 20px;
  }
  .modal_inform {
    font-size: 20px;
    color: gray;
    margin-bottom: 50px;
  }

  .modal_server_box {
    display: flex;
    flex-wrap: wrap;
    color: gray;
    justify-content: flex-start;
    margin-top: 150px;
    .modal_server_title {
      width: 100%;
      font-weight: 500;
    }
    .modal_server_input {
      width: 490px;
      height: 40px;
      font-size: 18px;
      border: none;
      background-color: rgb(225, 221, 221);
      border-radius: 5px;
      margin: 10px 10px 10px 0;
    }
  }
`;

export default Modal;
