import { GetStaticProps } from "next";
import React, { FC, useCallback, useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../configs/firebase";
import { HomeModelData } from "../models/HomeData";
import classes from "../styles/home.module.scss";
import { LinkType } from "../interfaces/navigation";
import { SiFacebook, SiTwitter, SiLinkedin } from "react-icons/si";
import { IconDisplay } from "../components/Global";
import { useRouter } from "next/router";
import { ContentContainer } from "../layouts";
import Head from "next/head";
import { HOSTNAME } from "../variable";
import Link from "next/link";

interface StaticProps {
  data: HomeModelData;
}

const Home: FC<StaticProps> = ({ data }) => {
  const { push } = useRouter();

  const socialMediaLinks: LinkType[] = [
    {
      Icon: SiFacebook,
      label: "Facebook",
      to: "https://www.facebook.com/DwrdVncntCvs.7/",
    },
    {
      Icon: SiTwitter,
      label: "Facebook",
      to: "https://twitter.com/dwrdvncntcvs",
    },
    {
      Icon: SiLinkedin,
      label: "Facebook",
      to: "https://www.linkedin.com/in/edward-vincent-cuevas-5a2485240/",
    },
  ];

  return (
    <>
      <Head>
        <title>{data.name}</title>
        <meta property="og:title" content={data.name} />
        <meta property="og:description" content={data.description} />
        <meta
          property="og:image"
          content={`${HOSTNAME}/_next/static/media/dwrdvncntcvs_logo.f13cb62f.png?w=256`}
        />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="864647734963796" />
        <meta property="og:url" content={HOSTNAME} />
      </Head>
      <div id={classes.home}>
        <section>
          <p>{data.greetings}</p>
          <div className={classes.name}>
            {data.name
              .toUpperCase()
              .split("")
              .map((char, i) => (
                <div className={classes.span} key={i}>
                  {char.trim() === "" ? "\u00A0" : char}
                </div>
              ))}
          </div>
          <p>{data.description}</p>
          <div className={classes["btn-group"]}>
            <button onClick={() => push(data.resume)}>RESUME</button>
            {socialMediaLinks.map(({ Icon, to }, i) => (
              <Link className={classes.btn} key={i} href={to} target="_blank">
                <Icon />
              </Link>
            ))}
          </div>
        </section>
        <section>
          <IconDisplay />
        </section>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const homeCollection = collection(db, "home");

  const homeDocs = await getDocs(homeCollection);
  const [data] = homeDocs.docs.map((docs) => ({
    id: docs.id,
    ...docs.data(),
  }));

  return {
    props: {
      data,
    },
  };
};

export default Home;
