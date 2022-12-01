import Image from "next/image";
import React, { FC } from "react";
import { SiGithub } from "react-icons/si";
import { ProjectMeta } from "../../../models/PortfolioData";
import { customImageLoader, generateDate } from "../../../utils/helper";
import classes from "./projectHeader.module.scss";
import Link from "next/link";

interface ProjectHeaderProps {
  mainImage: string;
  repository: string;
  details: ProjectMeta;
  appLink?: string;
}

const ProjectHeader: FC<ProjectHeaderProps> = ({
  details,
  mainImage,
  repository,
}) => {
  return (
    <section className={classes.header}>
      <Image
        src={mainImage}
        alt={details.title}
        width={300}
        height={300}
        loader={customImageLoader}
      />
      <div className={classes["btn-group"]}>
        <Link href={repository} className={classes.link}>
          <SiGithub />
        </Link>
      </div>

      <div className={classes.content}>
        <h1>{details.title}</h1>
        <p>{details.role}</p>
        <p>
          {generateDate(details.createdAt.toString())} -{" "}
          {details.endedAt.toString() === ""
            ? generateDate(details.endedAt.toString())
            : "Present"}
        </p>
      </div>
    </section>
  );
};

export default ProjectHeader;
