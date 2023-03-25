import { app_logo } from "assets/images";
import AboutMeDetails from "components/AboutMe/AboutMeDetails/AboutMeDetails";
import AboutMeImage from "components/AboutMe/AboutMeImage/AboutMeImage";
import { IconDisplay } from "components/Global";
import { db } from "configs/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Header } from "layouts/index";
import { PersonalData } from "models/AboutMeData";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { FC } from "react";
import { IconType } from "react-icons";
import {
  HiAtSymbol,
  HiCalendar,
  HiGlobeAlt,
  HiLocationMarker,
} from "react-icons/hi";
import classes from "styles/aboutMe.module.scss";
import { customImageLoader } from "utils/helper";
import { HOSTNAME } from "variables";

interface AboutMeProps {
  data: PersonalData;
}

export interface PersonalInfoWithIcon {
  Icon: IconType;
  label: string;
}

const AboutMe: FC<AboutMeProps> = ({ data }) => {
  const personalInfo: PersonalInfoWithIcon[] = [
    { Icon: HiAtSymbol, label: data.email },
    { Icon: HiLocationMarker, label: data.address },
    { Icon: HiCalendar, label: data.birthday },
    { Icon: HiGlobeAlt, label: data.nationality },
  ];

  return (
    <>
      <Head>
        <title>About Me | {data.name}</title>
        <meta property="og:title" content={` About Me | ${data.name}`} />
        <meta property="og:description" content={data.description[0]} />
        <meta property="og:image" content={`${app_logo}w=256`} />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="864647734963796" />
        <meta property="og:url" content={HOSTNAME} />
      </Head>
      <section className={classes["about-me"]}>
        <AboutMeImage imageUrl={data?.imageUrl} name={data?.name} />
        <AboutMeDetails
          description={data?.description}
          personalInfo={personalInfo}
        />
        <IconDisplay />
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const personalRef = collection(db, "personal");
  const personalDoc = await getDocs(personalRef);
  const [data] = personalDoc.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as PersonalData[];

  return { props: { data }, revalidate: 10 };
};

export default AboutMe;
