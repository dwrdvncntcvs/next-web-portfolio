import Link from "next/link";
import React, { FC } from "react";
import { HiCalendar, HiLink, HiLocationMarker } from "react-icons/hi";
import { ExperienceMeta } from "../../../models/ExperienceData";
import { generateDate } from "../../../utils/helper";
import classes from "./experienceIntro.module.scss";

interface ExperienceIntroProps {
  position: string;
  experienceMeta: ExperienceMeta;
  companyLink?: string;
}

const ExperienceIntro: FC<ExperienceIntroProps> = ({
  companyLink,
  experienceMeta,
  position,
}) => {
  return (
    <div className={classes.intro}>
      <h2>{position}</h2>
      <p>
        <HiCalendar id={classes.icon} />{" "}
        {generateDate(experienceMeta.dateStarted.toString())} -{" "}
        {generateDate(experienceMeta.dateEnded.toString())}
      </p>
      <address>
        <HiLocationMarker id={classes.icon} /> {experienceMeta.address}
      </address>
      {companyLink ? (
        <Link href={companyLink} target="_blank">
          <HiLink id={classes.icon} />
          {companyLink}
        </Link>
      ) : null}
    </div>
  );
};

export default ExperienceIntro;
