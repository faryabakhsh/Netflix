import { useRouter } from "next/router";
import styles from "./banner.module.css";
import Image from "next/image";

const Banner = (props) => {
  const router = useRouter();
  const { title, subTitle, imgUrl, videoId } = props;

  const handleOnPlay = () => {
    router.push(`video/${videoId}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <h2 className={styles.title}>{title}</h2>
          <br />
          <h3 className={styles.subTitle}>{subTitle}</h3>
          <div className={styles.playBtnWrapper}></div>
          <button className={styles.btnWithIcon} onClick={handleOnPlay}>
            <Image
              src="/static/play_arrow.svg"
              alt="play icon"
              width="32px"
              height="32px"
            />
            <span className={styles.playText}>Play </span>
          </button>
        </div>
      </div>
      <div
        className={styles.bannerImg}
        style={{
          backgroundImage: `url(${imgUrl})`,
          width: "100%",
          height: "100%",
          position: "absolute",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      ></div>
    </div>
  );
};

export default Banner;
