import React, { FC, PropsWithChildren } from "react";
import { Navigation } from "../../components/Global";
import classes from "./mainLayout.module.scss";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={`${classes.container} ${poppins.className}`}>
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
