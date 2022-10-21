import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner/banner";
import NavBar from "../components/nav/navbar";

import SectionCards from "../components/card/section-card";

export default function Home() {
  const disneyvideos = [
    {
      imgUrl: "/static/purple-hearts.jpg",
    },
    {
      imgUrl: "/static/purple-hearts.jpg",
    },
    {
      imgUrl: "/static/purple-hearts.jpg",
    },
    {
      imgUrl: "/static/purple-hearts.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar username="farya@gmail.com" />
      <Banner
        title="Purple Hearts"
        subTitle="An aspiring musician agrees to a marriage of convenience with a soon-to-deploy Marine, but a tragedy soon turns their fake relationship all too real."
        imgUrl="/static/purple-hearts.jpg"
      />

      <div className={styles.sectionWrapper}>
        <SectionCards title="Disney" videos={disneyvideos} size="large" />
        <SectionCards
          title="productivity videos"
          videos={disneyvideos}
          size="medium"
        />
      </div>
    </div>
  );
}
