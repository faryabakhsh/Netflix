import { useState } from "react";
import Image from "next/image";

import cls from "classnames";
import { motion } from "framer-motion";

import styles from "./card.module.css";

const Card = (props) => {
  const {
    imgUrl = "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80",
    size = "medium",
    id,
    shouldScale = true,
  } = props;

  const [imgSrc, setImgSrc] = useState(imgUrl);
  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const handleOnError = () => {
    setImgSrc(
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80"
    );
  };

  const scale = id === 0 ? { scaleY: 1.1 } : { scale: 1.1 };

  const shouldHover = shouldScale && {
    whileHover: { ...scale },
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={cls(styles.imgMotionWrapper, classMap[size])}
        {...shouldHover}
      >
        <Image
          src={imgSrc}
          alt="image"
          layout="fill"
          onError={handleOnError}
          className={styles.cardImg}
        />
      </motion.div>
    </div>
  );
};

export default Card;

// import Image from "next/image";
// import styles from "./card.module.css";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import cls from "classnames";

// const Card = (props, id) => {
//   const {
//     imgUrl = "https://images.unsplash.com/photo-1542423348-821c6bb30fe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
//     size = medium,
//   } = props;
//   const [imgSrc, setImgSrc] = useState(imgUrl);
//   const onhandleError = () => {
//   ;
//     setImgSrc(
//       "https://images.unsplash.com/photo-1542423348-821c6bb30fe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
//     );
//   };
//   const classMap = {
//     large: styles.lgItem,
//     medium: styles.mdItem,
//     small: styles.smItem,
//   };

//   const scale = id === 0 ? { scaleY: 1.1 } : { scale: 1.1 };

//   return (
//     <div className={styles.container}>
//       {/* <Image src={imgUrl} alt="image" width="300px" height="300px" /> */}
//       <motion.div
//         className={cls(styles.imgMotionWrapper, classMap[size])}
//         whileHover={{
//           ...scale,
//         }}
//       >
//         <Image
//           src={imgSrc}
//           alt="image"
//           layout="fill"
//           className={styles.cardImg}
//           onError={onhandleError}
//         />
//       </motion.div>
//     </div>
//   );
// };

// export default Card;
