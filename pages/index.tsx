import { GetStaticProps } from "next";
import React, { FC } from "react";
import { getDocs, collection } from "firebase/firestore";
import { f_store } from "../configs/firebase";
import { HomeModelData } from "../models/HomeData";
import classes from "../styles/home.module.scss";
import { LinkType } from "../interfaces/navigation";
import { SiFacebook, SiTwitter, SiLinkedin } from "react-icons/si";
import { IconDisplay } from "../components";
import { useRouter } from "next/router";
import { ContentContainer } from "../layouts";

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
    <ContentContainer>
      <div id={classes.home}>
        <section>
          <p>{data.greetings}</p>
          <p>{data.name}</p>
          <p>{data.description}</p>
          <div className={classes["btn-group"]}>
            <button>RESUME</button>
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
