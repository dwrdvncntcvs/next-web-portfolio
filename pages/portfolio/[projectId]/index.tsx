import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { FC } from "react";
import { db } from "../../../configs/firebase";
import { ContentContainer } from "../../../layouts";
import { ProjectDetailsData } from "../../../models/PortfolioData";
import {
  ProjectHeader,
  ProjectImages,
  ProjectIntro,
  ProjectTech,
} from "../../../components/Portfolio";
import classes from "../../../styles/projectDetails.module.scss";
import Head from "next/head";

interface ProjectDetailsProps {
  data: string;
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
  } = JSON.parse(data) as ProjectDetailsData;

  return (
    <>
      <Head>
        <title>{details.title}</title>
      </Head>
      <ContentContainer>
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
      </ContentContainer>
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

  const data = JSON.stringify({
    ...{
      ...docData,
    },
  });

  return { props: { data } };
};

export default ProjectDetails;
