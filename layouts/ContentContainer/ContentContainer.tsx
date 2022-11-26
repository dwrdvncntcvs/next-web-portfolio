import React, { FC, PropsWithChildren } from "react";
import classes from "./contentContainer.module.scss";

const ContentContainer: FC<PropsWithChildren> = ({ children }) => {
  return <section className={classes["content-container"]}>{children}</section>;
};

export default ContentContainer;
