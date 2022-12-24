import styles from "../../css/main.module.css";

const ChatMassege = () => {
  return (
    <li className={styles.libox}>
      <div className={styles.box}>
        <div className={styles.left}>
          <div className={styles.imgBox}>
            <img className={styles.profile_img} />
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.info}>
            <span className={styles.nickname}> 닉네임입니다.</span>
            <span className={styles.date}> 2022.12.24</span>
          </div>
          <div className={styles.content}>채팅이 들어가는 자리입니다.</div>
        </div>
      </div>
    </li>
  );
};

export default ChatMassege;
