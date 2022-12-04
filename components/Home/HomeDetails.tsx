import React, { FC } from "react";
import classes from "./homeDetails.module.scss";

interface HomeDetailsProps {
  greetings: string;
  name: string;
  description: string;
}

const HomeDetails: FC<HomeDetailsProps> = ({
  description,
  greetings,
  name,
}) => {
  return (
    <div className={classes.details}>
      <p>{greetings}</p>
      <div className={classes.name}>
        {name
          .toUpperCase()
          .split("")
          .map((char, i) => (
            <div className={classes.span} key={i}>
              {char.trim() === "" ? "\u00A0" : char}
            </div>
          ))}
      </div>
      <p>{description}</p>
    </div>
  );
};

export default HomeDetails;
