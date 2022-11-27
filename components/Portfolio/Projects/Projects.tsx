import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { Project } from "../../../models/PortfolioData";
import classes from "./projects.module.scss";

interface ProjectProps {
  projects: Project[];
}

const Projects: FC<ProjectProps> = ({ projects }) => {
  return (
    <ul className={classes.projects}>
      {projects.map(({ id, imageUrl }) => (
        <Link href={`/portfolio/${id}`} key={id}>
          <li>
            <Image
              src={imageUrl}
              alt={id}
              width={300}
              height={300}
              loader={({ src, width }) => `${src}w?=${width}`}
            />
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Projects;
