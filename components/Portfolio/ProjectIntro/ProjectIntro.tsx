import Link from "next/link";
import React, { FC } from "react";
import { HiLink } from "react-icons/hi";
import classes from "./projectIntro.module.scss";

interface ProjectIntroProps {
  description: string;
  appLink?: string;
}

const ProjectIntro: FC<ProjectIntroProps> = ({ description, appLink }) => {
  return (
    <section className={classes.intro}>
      <h2>description.</h2>
      <p>{description}</p>
      {appLink ? (
        <Link href={appLink} target="_blank">
          <HiLink id={classes.icon} /> {appLink}
        </Link>
      ) : null}
    </section>
  );
};

export default ProjectIntro;
