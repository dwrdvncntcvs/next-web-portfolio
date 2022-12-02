import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { FC } from "react";
import { db } from "../../../configs/firebase";
import { Header } from "../../../layouts";
import { Experience, ExperienceData } from "../../../models/ExperienceData";
import { customImageLoader } from "../../../utils/helper";
import classes from "../../../styles/experience.module.scss";
import {
  ExperienceIntro,
  ExperienceProjects,
} from "../../../components/Experiences";
import { HOSTNAME } from "../../../variable";

interface ExperienceDetailsProps {
  data: ExperienceData;
}

const ExperienceDetails: FC<ExperienceDetailsProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Experience | {data.companyName}</title>
        <meta
          property="og:title"
          content={`Experience | ${data.companyName}`}
        />
        <meta property="og:description" content={data.description} />
        <meta property="og:image" content={`${data.companyLogo}w=256`} />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="864647734963796" />
        <meta property="og:url" content={HOSTNAME} />
      </Head>
      <section className={classes.experience}>
        <Header
          description={`"${data.description}"`}
          title={data.companyName}
        />

        <div className={classes.content}>
          <Image
            src={data.companyLogo}
            alt={data.companyName}
            width={500}
            height={500}
            loader={customImageLoader}
          />
          <div className={classes.details}>
            <ExperienceIntro
              companyLink={data?.companyLink}
              experienceMeta={data.meta}
              position={data.position}
            />
            <ExperienceProjects projects={data?.positions} />
          </div>
        </div>
      </section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const experiencesRef = collection(db, "experiences");
  const experiencesDocs = await getDocs(experiencesRef);
  const exp_data = experiencesDocs.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))[0] as Experience;

  const paths = exp_data.experiences.map(({ id }) => ({
    params: { experienceId: id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { experienceId } = params as { experienceId: string };

  const docRef = doc(db, "experienceDetails", experienceId);
  const exp_doc = await getDoc(docRef);
  const doc_data = exp_doc.data();

  const data = {
    ...doc_data,
    meta: {
      ...doc_data?.meta,
      dateEnded: JSON.stringify(doc_data?.meta.dateEnded),
      dateStarted: JSON.stringify(doc_data?.meta.dateStarted),
    },
  };

  return { props: { data } };
};

export default ExperienceDetails;
