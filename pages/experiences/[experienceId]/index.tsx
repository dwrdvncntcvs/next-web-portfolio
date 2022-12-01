import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { FC } from "react";
import { db } from "../../../configs/firebase";
import { Header } from "../../../layouts";
import { Experience, ExperienceData } from "../../../models/ExperienceData";
import { customImageLoader, generateDate } from "../../../utils/helper";
import classes from "../../../styles/experience.module.scss";
import {
  HiCalendar,
  HiLocationMarker,
  HiChevronRight,
  HiLink,
} from "react-icons/hi";
import Link from "next/link";

interface ExperienceDetailsProps {
  data: ExperienceData;
}

const ExperienceDetails: FC<ExperienceDetailsProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Experience | {data.companyName}</title>
      </Head>
      <section className={classes.experience}>
        <Header description={data.description} title={data.companyName} />

        <div className={classes.content}>
          <Image
            src={data.companyLogo}
            alt={data.companyName}
            width={500}
            height={500}
            loader={customImageLoader}
          />
          <div className={classes.details}>
            <div className={classes.intro}>
              <h2>{data.position}</h2>
              <p>
                <HiCalendar id={classes.icon} />{" "}
                {generateDate(data.meta.dateStarted.toString())} -{" "}
                {data.meta.dateEnded.toString() === ""
                  ? generateDate(data.meta.dateEnded.toString())
                  : "Present"}
              </p>
              <address>
                <HiLocationMarker id={classes.icon} /> {data.meta.address}
              </address>
              {data.companyLink ? (
                <Link href={data.companyLink} target="_blank">
                  <HiLink id={classes.icon} />
                  {data.companyLink}
                </Link>
              ) : null}
            </div>
            <ul>
              {data?.positions?.map(({ tasks, title }) => (
                <li className={classes.positions} key={title}>
                  <ul>
                    <h3>
                      <HiChevronRight /> {title}
                    </h3>
                    <ul className={classes.tasks}>
                      {tasks?.map((task) => (
                        <li className={classes.task} key={task}>
                          <HiChevronRight /> {task}
                        </li>
                      ))}
                    </ul>
                  </ul>
                </li>
              ))}
            </ul>
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
