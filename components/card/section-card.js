import Card from "./card";
import styles from "./section-card.module.css";

const SectionCards = (props) => {
  const { title } = props;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        <Card id={0} imgUrl="/static/purple-hearts.jpg" size="large" />
        <Card imgUrl="/static/purple-hearts.jpg" size="large" />
        <Card imgUrl="/static/purple-hearts.jpg" size="large" />
      </div>
    </section>
  );
};

export default SectionCards;
