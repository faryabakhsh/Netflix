import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from "../../styles/video.module.css";

Modal.setAppElement("#__next");

const Video = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Modal
        isOpen={true}
        contentLabel="Example Modal"
        onRequestClose={() => router.back()}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div>modal body</div>
      </Modal>
    </div>
  );
};

export default Video;
