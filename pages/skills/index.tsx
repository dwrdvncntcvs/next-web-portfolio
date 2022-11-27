import { collection, getDocs } from "firebase/firestore";
import { GetStaticProps } from "next";
import React, { FC } from "react";
import { db } from "../../configs/firebase";
import { ContentContainer, Header } from "../../layouts";
import { Skill } from "../../models/SkillsData";
import classes from "../../styles/skill.module.scss";
import Head from "next/head";
import { Soft } from "../../components/Skills";
import Technical from "../../components/Skills/Technical/Technical";

interface SkillProps {
  data: Skill;
}

const Skills: FC<SkillProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Skills</title>
      </Head>
      <ContentContainer>
        <div id={classes.skills}>
          <Header description={data.description} title="skills." />
          <div className={classes["row-content"]}>
            <Soft softSkills={data.soft} />
            <Technical technicalSkills={data.technical} />
          </div>
        </div>
      </ContentContainer>
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
