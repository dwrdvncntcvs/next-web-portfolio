import { GetStaticProps } from "next";
import Head from "next/head";
import React, { FC } from "react";
import { ExperiencesList } from "components/Experiences";
import { Header } from "layouts";
import { Experience } from "models/ExperienceData";
import classes from "styles/experiences.module.scss";
import { app_logo } from "assets/images";
import { HOSTNAME } from "variables";
import { getStoreState, storeDispatch } from "store/redux";
import { getExperiencesData } from "store/redux/api/experienceApi";

interface ExperiencesProps {
    data?: Experience;
}

const Experiences: FC<ExperiencesProps> = ({ data }) => {
    return (
        <>
            <Head>
                <title>Experiences</title>
                <meta property="og:title" content={`Experiences`} />
                <meta property="og:description" content={data?.description!} />
                <meta property="og:image" content={`${app_logo}w=256`} />
                <meta property="og:type" content="website" />
                <meta property="fb:app_id" content="864647734963796" />
                <meta property="og:url" content={HOSTNAME} />
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
    await storeDispatch(getExperiencesData());
    const { data } = getStoreState("experienceData");

    return { props: { data }, revalidate: 10 };
};

export default Experiences;
