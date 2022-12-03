import { collection, getDocs } from "firebase/firestore";
import { GetStaticProps } from "next";
import React, { FC } from "react";
import { db } from "configs/firebase";
import { Header } from "layouts";
import { Skill } from "models/SkillsData";
import classes from "styles/skill.module.scss";
import Head from "next/head";
import { Soft, Technical } from "components/Skills";
import { HOSTNAME } from "variables";

interface SkillProps {
  data: Skill;
}

const Skills: FC<SkillProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Skills</title>
        <meta property="og:title" content="Skills" />
        <meta property="og:description" content={data.description} />
        <meta
          property="og:image"
          content={`${HOSTNAME}/_next/static/media/dwrdvncntcvs_logo.f13cb62f.png?w=256`}
        />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="864647734963796" />
        <meta property="og:url" content={HOSTNAME} />
      </Head>
      <div id={classes.skills}>
        <Header description={data.description} title="skills." />
        <div className={classes["row-content"]}>
          <Soft softSkills={data.soft} />
          <Technical technicalSkills={data.technical} />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const skillsCollection = collection(db, "skills");
  const skillsDocs = await getDocs(skillsCollection);

  const [skill] = await skillsDocs.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return { props: { data: skill } };
};

export default Skills;
