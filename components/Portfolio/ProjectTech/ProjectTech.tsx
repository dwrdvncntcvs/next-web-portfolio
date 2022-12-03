import React, { FC } from "react";
import { IconData } from "models/PortfolioData";
import { getIcon, TechnicalIcon } from "utils/helper";
import { SKILL_TYPE_VAR } from "variables";
import classes from "./projectTech.module.scss";

interface ProjectTechProps {
  technologies: IconData[];
}

const ProjectTech: FC<ProjectTechProps> = ({ technologies }) => {
  return (
    <section className={classes.tech}>
      <h2>technologies.</h2>
      <ul>
        {technologies.map(({ icon, title }) => {
          const { Icon, color } = getIcon<TechnicalIcon>(
            icon,
            SKILL_TYPE_VAR.TECHNICAL
          );
          return (
            <li key={icon}>
              <Icon id={classes.icon} color={color} /> <span>{title}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ProjectTech;
