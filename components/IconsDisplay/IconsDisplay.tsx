import React from "react";
import { getIcon } from "../../utils/helper";
import { SKILL_TYPE_VAR } from "../../variable";
import classes from "./iconDisplay.module.scss";

const IconsDisplay = () => {
  const icons: string[] = [
    "angularjs",
    "express",
    "typescript",
    "javascript",
    "nodejs",
    "react",
    "sass",
    "redux",
    "yarn",
    "npm",
    "html5",
  ];

  return (
    <div className={classes.icons}>
      {icons.map((icon, i) => {
        const { Icon, color } = getIcon(icon, SKILL_TYPE_VAR.TECHNICAL)!;

        return <Icon className={classes[`${icon}`]} key={i} color={color} />;
      })}
    </div>
  );
};

export default IconsDisplay;
