import { ExperienceItem } from "models/ExperienceData";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import classes from "./experiencesList.module.scss";

interface ExperiencesListProps {
  experiences: ExperienceItem[];
}

const ExperiencesList: FC<ExperiencesListProps> = ({ experiences }) => {
  return (
    <ul className={classes.experiences}>
      {experiences.map(({ id, imageUrl, companyName }) => (
        <Link href={`/experiences/${id}`} key={id}>
          <Image
            src={imageUrl}
            alt={id}
            width={300}
            height={300}
            loader={({ src, width }) => `${src}w?=${width}`}
          />
        </Link>
      ))}
    </ul>
  );
};

export default ExperiencesList;
