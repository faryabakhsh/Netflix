import styles from "./banner.module.css";

const Banner = (props) => {
  const { title, subTitle, imgUrl } = props;

  const handleOnPlay = () => {
    console.log("clicked");
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <h2 className={styles.title}>{title}</h2>
          <h3 className={styles.subTitle}>{subTitle}</h3>
          <div className={styles.playBtnWrapper}></div>
          <button className={styles.btnWithIcon} onClick={handleOnPlay}>
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
