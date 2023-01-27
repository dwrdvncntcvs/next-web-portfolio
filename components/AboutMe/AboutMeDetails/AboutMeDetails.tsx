import { Header } from "layouts/index";
import { PersonalInfoWithIcon } from "pages/about-me";
import React, { FC } from "react";
import classes from "./aboutMeDetails.module.scss";

interface AboutMeDetailsProps {
  description: string[];
  personalInfo: PersonalInfoWithIcon[];
}

const AboutMeDetails: FC<AboutMeDetailsProps> = ({
  description,
  personalInfo,
}) => {
  return (
    <div className={classes["details"]}>
      <Header title="about me." />
      {description.map((desc) => (
        <p key={desc}>{desc}</p>
      ))}

      {personalInfo.map(({ Icon, label }) => (
        <p key={label} className={classes.info}>
          <Icon /> {label.toUpperCase()}
        </p>
      ))}
    </div>
  );
};

export default AboutMeDetails;
