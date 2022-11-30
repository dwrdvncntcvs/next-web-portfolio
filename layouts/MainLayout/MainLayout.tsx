import React, { FC, PropsWithChildren } from "react";
import { Navigation } from "../../components/Global";
import classes from "./mainLayout.module.scss";
import { Content, Poppins } from "@next/font/google";
import ContentContainer from "../ContentContainer/ContentContainer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={`${classes.container} ${poppins.className}`}>
      <Navigation />
      <main>
        <ContentContainer>{children}</ContentContainer>
      </main>
    </div>
  );
};

export default MainLayout;
