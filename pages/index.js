import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner/banner";
import NavBar from "../components/nav/navbar";

import SectionCards from "../components/card/section-card";
import { getVideos, getPopularVideos } from "../lib/videos";

export async function getServerSideProps() {
  const disneyvideos = await getVideos("disney trailer");

  const travelvideos = await getVideos("travel");

  const productivityvideos = await getVideos("productivity");

  const popularvideos = await getVideos("popular videos");

  return {
    props: { disneyvideos, travelvideos, productivityvideos, popularvideos },
  }; // disney videos get passed as props to our home page
}

export default function Home({
  disneyvideos,
  travelvideos,
  productivityvideos,
  popularvideos,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <NavBar username="farya@gmail.com" />
        <Banner
          title="Purple Hearts"
          subTitle="An aspiring musician agrees to a marriage of convenience with a soon-to-deploy Marine, but a tragedy soon turns their fake relationship all too real."
          imgUrl="/static/purple-hearts.jpg"
          videoId="123445"
        />

        <div className={styles.sectionWrapper}>
          <SectionCards title="Disney" videos={disneyvideos} size="large" />
          <SectionCards title="Travel" videos={travelvideos} size="small" />
          <SectionCards
            title="Productivity"
            videos={productivityvideos}
            size="medium"
          />
          <SectionCards title="Popular" videos={popularvideos} size="small" />
        </div>
      </div>
    </div>
  );
}
