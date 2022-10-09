import Image from "next/image";

const Card = (props) => {
  const { imgUrl, size } = props;
  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  return (
    <div className={styles.container}>
      <div className={classMap[size]}>
        <Image src={imgUrl} alt="image" layout="fill" />
      </div>
    </div>
  );
};

export default Card;
