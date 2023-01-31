import React, { FC } from "react";
import { SiGithub } from "react-icons/si";
import { ProjectMeta } from "models/PortfolioData";
import { generateDate } from "utils/helper";
import classes from "./projectHeader.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { DisplayImage } from "components/Global";

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
  const { query } = useRouter();
  const { projectId } = query as { projectId: string };

  return (
    <section className={classes.header}>
      <DisplayImage imageUrl={mainImage} name={projectId} />
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
          {generateDate(details.endedAt.toString())}
        </p>
      </div>
    </section>
  );
};

export default ProjectHeader;
