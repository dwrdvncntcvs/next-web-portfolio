import React, { FC } from "react";
import classes from "./header.module.scss";

interface HeaderProps {
  title: string;
  description?: string;
}

const Header: FC<HeaderProps> = ({ description, title }) => {
  return (
    <section className={classes.header}>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
};

export default Header;
