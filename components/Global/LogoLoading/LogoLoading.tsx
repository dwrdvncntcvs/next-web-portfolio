import { Logo } from "assets/svgs";
import Image from "next/image";
import React from "react";
import classes from "./logoLoading.module.scss";

const LogoLoading = () => {
  return (
    <div className={classes.container}>
      <Image
        className={classes.logo}
        src={Logo.src}
        width={300}
        height={300}
        loader={({ src }) => src}
        alt={"Edward Vincent's Portfolio"}
      />
    </div>
  );
};

export default LogoLoading;
