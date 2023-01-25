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
        <li key={id}>
          <Link href={`/portfolio/${id}`}>
            <DisplayImage imageUrl={imageUrl} name={id} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Projects;
