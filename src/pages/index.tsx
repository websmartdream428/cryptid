import type { NextPage } from "next";
import Head from "next/head";
import {
  AboutSection,
  IntroSection,
  JoinSection,
  LycansSection,
  MeetTeamSection,
  MintSection,
  PolygonSection,
} from "view/landing";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CRYPTID</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IntroSection />
      <AboutSection />
      <MeetTeamSection />
      <JoinSection />
      <LycansSection />
      <MintSection />
      <PolygonSection />
    </div>
  );
};

export default Home;
