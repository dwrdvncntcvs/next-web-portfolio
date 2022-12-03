import { collection, getDocs } from "firebase/firestore";
import { GetStaticProps } from "next";
import Head from "next/head";
import React, { FC } from "react";
import { ExperiencesList } from "components/Experiences";
import { db } from "configs/firebase";
import { Header } from "layouts";
import { Experience } from "models/ExperienceData";
import classes from "styles/experiences.module.scss";

interface ExperiencesProps {
  data?: Experience;
}

const Experiences: FC<ExperiencesProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Experiences</title>
      </Head>
      <section className={classes.experience}>
        <Header description={data?.description!} title="experiences." />
        <div className={classes.content}>
          <ExperiencesList experiences={data?.experiences!} />
        </div>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const expCollection = collection(db, "experiences");

  const response = await getDocs(expCollection);
  const [data] = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return { props: { data } };
};

export default Experiences;
