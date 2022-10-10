import Image from "next/image";
import styles from "./card.module.css";
import { useState } from "react";

const Card = (props) => {
  const {
    imgUrl = "https://images.unsplash.com/photo-1542423348-821c6bb30fe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
    size = medium,
  } = props;
  const [imgSrc, setImgSrc] = useState(imgUrl);
  const onhandleError = () => {
    console.log(" hi error");
    setImgSrc(
      "https://images.unsplash.com/photo-1542423348-821c6bb30fe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
    );
  };
  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  return (
    <div className={styles.container}>
      <Image src={imgUrl} alt="image" width="300px" height="300px" />
      <div className={classMap[size]}>
        <Image
          src={imgSrc}
          alt="image"
          layout="fill"
          className={styles.cardImg}
          onError={onhandleError}
        />
      </div>
    </div>
  );
};

export default Card;
