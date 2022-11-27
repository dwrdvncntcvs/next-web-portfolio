import { GetStaticProps } from "next";
import React, { FC, useCallback, useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { f_store } from "../configs/firebase";
import { HomeModelData } from "../models/HomeData";
import classes from "../styles/home.module.scss";
import { LinkType } from "../interfaces/navigation";
import { SiFacebook, SiTwitter, SiLinkedin } from "react-icons/si";
import { IconDisplay } from "../components";
import { useRouter } from "next/router";
import { ContentContainer } from "../layouts";
import Head from "next/head";

interface StaticProps {
  data: HomeModelData;
}

const Home: FC<StaticProps> = ({ data }) => {
  const { push } = useRouter();

  const hostname =
    typeof window !== "undefined" && window.location.hostname
      ? window.location.hostname
      : "";
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
          content="https://2181-136-158-31-249.ngrok.io/_next/static/media/dwrdvncntcvs_logo.f13cb62f.png?w=256"
        />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="864647734963796" />
        <meta property="og:url" content={hostname} />
      </Head>
      <ContentContainer>
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
                <button key={i} onClick={() => push(to)}>
                  <Icon />
                </button>
              ))}
            </div>
          </section>
          <section>
            <IconDisplay />
          </section>
        </div>
      </ContentContainer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const homeCollection = collection(f_store, "home");

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
