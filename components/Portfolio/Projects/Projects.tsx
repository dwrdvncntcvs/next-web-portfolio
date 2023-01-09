import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { Project } from "models/PortfolioData";
import classes from "./projects.module.scss";
import { DisplayImage } from "components/Global";

interface ProjectProps {
  projects: Project[];
}

const Projects: FC<ProjectProps> = ({ projects }) => {
  return (
    <ul className={classes.projects}>
      {projects.map(({ id, imageUrl }) => (
        <Link href={`/portfolio/${id}`} key={id}>
          <li>
            <DisplayImage imageUrl={imageUrl} name={id} />
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Projects;
