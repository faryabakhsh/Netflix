import next from "next";
import Card from "./card";
import styles from "./section-card.module.css";
import Link from "next/Link";

const SectionCards = (props) => {
  const { title, videos = [], size } = props;
  console.log({ videos });

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, idx) => {
          return;
          <Link href="'/video/${videoId}}">
            <Card id={idx} imgUrl={video.imgUrl} size={size} />;
          </Link>;
        })}
      </div>
    </section>
  );
};

export default SectionCards;
