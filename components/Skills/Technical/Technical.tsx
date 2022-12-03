import React, { FC } from "react";
import { TechnicalSkill } from "models/SkillsData";
import { getIcon, TechnicalIcon } from "utils/helper";
import { SKILL_TYPE_VAR } from "variables";
import classes from "./technical.module.scss";

interface TechnicalProps {
  technicalSkills: TechnicalSkill[];
}

const Technical: FC<TechnicalProps> = ({ technicalSkills }) => {
  const technicalSkill = technicalSkills.map(({ icon, title }) => {
    const { Icon, color } = getIcon<TechnicalIcon>(
      icon,
      SKILL_TYPE_VAR.TECHNICAL
    );

    return (
      <li key={title}>
        <Icon color={color} id={classes.icon} />
        <p>{title}</p>
      </li>
    );
  });

  return (
    <section className={classes.technical}>
      <h2>soft skills.</h2>
      <ul className={classes.t_ul}>{technicalSkill}</ul>
    </section>
  );
};

export default Technical;
