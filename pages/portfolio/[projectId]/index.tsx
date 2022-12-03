import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { FC } from "react";
import { db } from "configs/firebase";
import { ProjectDetailsData } from "models/PortfolioData";
import {
  ProjectHeader,
  ProjectImages,
  ProjectIntro,
  ProjectTech,
} from "components/Portfolio";
import classes from "styles/projectDetails.module.scss";
import Head from "next/head";
import { HOSTNAME } from "variables";

interface ProjectDetailsProps {
  data: ProjectDetailsData;
}

const ProjectDetails: FC<ProjectDetailsProps> = ({ data }) => {
  const {
    appLink,
    description,
    details,
    images,
    mainImage,
    repository,
    technologies,
  } = data;

  return (
    <>
      <Head>
        <title>Portfolio | {details.title}</title>
        <meta property="og:title" content={`Portfolio | ${details.title}`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${mainImage}w=256`} />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="864647734963796" />
        <meta property="og:url" content={HOSTNAME} />
      </Head>
      <div className={classes.details}>
        <ProjectHeader
          details={details}
          mainImage={mainImage}
          repository={repository}
        />
        <ProjectIntro description={description} appLink={appLink} />
        <ProjectTech technologies={technologies} />
        <ProjectImages images={images} />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const portfolioDetailsCollection = collection(db, "portfolioDetails");
  const portfolioDetails = await getDocs(portfolioDetailsCollection);
  const data = portfolioDetails.docs.map((doc) => ({
    params: { projectId: doc.id },
  }));

  return { paths: data, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const portfolioRef = doc(db, "portfolioDetails", params?.projectId as string);
  const portfolioDetails = await getDoc(portfolioRef);
  const docData = portfolioDetails.data();

  const data = {
    ...docData,
    details: {
      ...docData?.details,
      createdAt: JSON.stringify(docData?.details.createdAt),
      endedAt: JSON.stringify(docData?.details.endedAt),
    },
  };

  return { props: { data } };
};

export default ProjectDetails;
