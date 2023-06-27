import { GetStaticPaths, GetStaticProps } from "next";
import React, { FC } from "react";
import { PortfolioData, ProjectDetailsData } from "models/PortfolioData";
import {
    ProjectHeader,
    ProjectImages,
    ProjectIntro,
    ProjectTech,
} from "components/Portfolio";
import classes from "styles/projectDetails.module.scss";
import Head from "next/head";
import { HOSTNAME } from "variables";
import { getStoreState, storeDispatch } from "store/redux";
import { getPortfolioData } from "store/redux/api/portfolioApi";
import { getPortfolioDetails } from "store/redux/api/portfolioDetailsApi";

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
                <meta
                    property="og:title"
                    content={`Portfolio | ${details.title}`}
                />
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
                {images && images.length > 0 && (
                    <ProjectImages images={images} />
                )}
            </div>
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await storeDispatch(getPortfolioData());

    const paths = (data.payload as PortfolioData).projects.map((project) => ({
        params: { projectId: project.id },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    await storeDispatch(getPortfolioDetails(params?.projectId as string));
    const { data } = getStoreState("portfolioDetailsData");

    return { props: { data }, revalidate: 10 };
};

export default ProjectDetails;
