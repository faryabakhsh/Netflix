import Card from "./card";
import Link from "next/link";
import clsx from "classnames";
import styles from "./section-cards.module.css";

const SectionCards = (props) => {
  const { title, videos = [], size, shouldWrap = false, shouldScale } = props;
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={clsx(styles.cardWrapper, shouldWrap && styles.wrap)}>
        {videos.map((video, idx) => {
          return (
            <Link href={`/video/${video.id}`} key={video.id}>
              <a>
                <Card
                  id={idx}
                  imgUrl={video.imgUrl}
                  size={size}
                  shouldScale={shouldScale}
                />
              </a>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default SectionCards;

// import next from "next";
// import Card from "./card";
// import styles from "./section-card.module.css";
// import Link from "next/Link";

// const SectionCards = (props) => {
//   const { title, videos = [], size, shouldWrap = false } = props;

//   return (
//     <section className={styles.container}>
//       <h2 className={styles.title}>{title}</h2>
//       <div className={styles.cardWrapper}>
//         {videos.map((video, idx) => {
//           return (
//             <Link href={`/video/${video.id}`} key={video.id}>
//               <a>
//                 <Card id={idx} imgUrl={video.imgUrl} size={size} />;
//               </a>
//             </Link>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default SectionCards;
