import { GetStaticProps } from "next";
import Head from "next/head";
import React, { FC } from "react";
import { Projects } from "components/Portfolio";
import { Header } from "layouts";
import { PortfolioData } from "models/PortfolioData";
import classes from "styles/portfolio.module.scss";
import { app_logo } from "assets/images";
import { HOSTNAME } from "variables";
import { storeDispatch } from "store/redux";
import { getPortfolioData } from "store/redux/api/portfolioApi";

interface PortfolioProps {
    data: PortfolioData;
}

const Portfolio: FC<PortfolioProps> = ({ data }) => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta property="og:title" content={`Portfolio`} />
                <meta property="og:description" content={data.description} />
                <meta property="og:image" content={`${app_logo}w=256`} />
                <meta property="og:type" content="website" />
                <meta property="fb:app_id" content="864647734963796" />
                <meta property="og:url" content={HOSTNAME} />
            </Head>
            <section className={classes.portfolio}>
                <Header title="portfolio." description={data.description} />
                <Projects projects={data.projects} />
            </section>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const data = await storeDispatch(getPortfolioData());

    return { props: { data: data.payload }, revalidate: 10 };
};

export default Portfolio;
