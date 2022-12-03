import { app_logo } from "assets/images";
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

const AboutMe: FC<AboutMeProps> = ({ data }) => {
  console.log(data);

  const divCount = [1, 2];

  const personalInfo: { Icon: IconType; label: string }[] = [
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
        <div className={classes["image-container"]}>
          {divCount.map((num) => (
            <div key={num.toString()}></div>
          ))}
          <Image
            src={data.imageUrl}
            alt={data.name}
            width={400}
            height={400}
            loader={customImageLoader}
          />
        </div>
        <div className={classes["details"]}>
          <Header title="about me." />
          {data.description.map((desc) => (
            <p key={desc}>{desc}</p>
          ))}
          {personalInfo.map(({ Icon, label }) => (
            <p key={label} className={classes.info}>
              <Icon /> {label.toUpperCase()}
            </p>
          ))}
          <IconDisplay />
        </div>
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

  return { props: { data } };
};

export default AboutMe;
