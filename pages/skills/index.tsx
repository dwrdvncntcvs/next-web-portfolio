import { collection, getDocs } from "firebase/firestore";
import { GetStaticProps } from "next";
import React, { FC } from "react";
import { db } from "../../configs/firebase";
import { ContentContainer } from "../../layouts";
import { Skill } from "../../models/SkillsData";
import { getIcon, SoftIcon, TechnicalIcon } from "../../utils/helper";
import { SKILL_TYPE_VAR } from "../../variable";

interface SkillProps {
  data: Skill;
}

const Skills: FC<SkillProps> = ({ data }) => {
  console.log("Data: ", data);
  const softSkill = data.soft.map(({ description, icon, title }) => {
    const { Icon } = getIcon<SoftIcon>(icon, SKILL_TYPE_VAR.SOFT);
    return (
      <li key={title}>
        <Icon />
        <p>{description}</p>
      </li>
    );
  });

  const technicalSkill = data.technical.map(({ icon, title }) => {
    const { Icon, color } = getIcon<TechnicalIcon>(
      icon,
      SKILL_TYPE_VAR.TECHNICAL
    );

    return (
      <li key={title}>
        <Icon color={color} />
      </li>
    );
  });

  return (
    <ContentContainer>
      <section>
        <h1>Skills</h1>
        <p>{data.description}</p>
      </section>
      <div>
        <section>
          <h2>Soft Skills</h2>
          <ul>{softSkill}</ul>
        </section>
        <section>
          <h2>Technical Skills</h2>
          <ul>{technicalSkill}</ul>
        </section>
      </div>
    </ContentContainer>
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
