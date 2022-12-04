import React, { FC } from "react";
import { SoftSkill } from "models/SkillsData";
import { getIcon, SoftIcon } from "utils/helper";
import { SKILL_TYPE_VAR } from "variables";
import classes from "./soft.module.scss";

interface SoftProps {
  softSkills: SoftSkill[];
}

const Soft: FC<SoftProps> = ({ softSkills }) => {
  const softSkill = softSkills.map(({ description, icon, title }) => {
    const { Icon } = getIcon<SoftIcon>(icon, SKILL_TYPE_VAR.SOFT);
    return (
      <li key={title}>
        <Icon id={classes.icon} />
        <p>{description}</p>
      </li>
    );
  });

  return (
    <section className={classes.soft}>
      <h2>soft.</h2>
      <ul>{softSkill}</ul>
    </section>
  );
};

export default Soft;
