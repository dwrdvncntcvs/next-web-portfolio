import React, { FC } from "react";
import classes from "./experienceProjects.module.scss";
import { CompanyPosition } from "../../../models/ExperienceData";
import { HiChevronRight } from "react-icons/hi";

interface ExperienceProjectsProps {
  projects: CompanyPosition[];
}

const ExperienceProjects: FC<ExperienceProjectsProps> = ({ projects }) => {
  return (
    <div className={classes.projects}>
      {projects?.map(({ tasks, title }) => (
        <ul className={classes.positions} key={title}>
          <h3>
            <HiChevronRight /> {title}
          </h3>
          <ul className={classes.tasks}>
            {tasks?.map((task) => (
              <li className={classes.task} key={task}>
                <HiChevronRight /> {task}
              </li>
            ))}
          </ul>
        </ul>
      ))}
    </div>
  );
};

export default ExperienceProjects;
