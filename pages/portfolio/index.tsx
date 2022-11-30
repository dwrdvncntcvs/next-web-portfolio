import { collection, getDocs } from "firebase/firestore";
import { GetStaticProps } from "next";
import Head from "next/head";
import React, { FC } from "react";
import { Projects } from "../../components/Portfolio";
import { db } from "../../configs/firebase";
import { ContentContainer, Header } from "../../layouts";
import { PortfolioData } from "../../models/PortfolioData";
import classes from "../../styles/portfolio.module.scss";

interface PortfolioProps {
  data: PortfolioData;
}

const Portfolio: FC<PortfolioProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <section className={classes.portfolio}>
        <Header title="portfolio." description={data.description} />
        <Projects projects={data.projects} />
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const portfolioCollection = collection(db, "portfolio");
  const portfolioDocs = await getDocs(portfolioCollection);
  const data = portfolioDocs.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))[0] as PortfolioData;

  return { props: { data } };
};

export default Portfolio;
