import React, { FC, PropsWithChildren } from "react";
import { Navigation } from "components/Global";
import classes from "./mainLayout.module.scss";
import ContentContainer from "layouts/ContentContainer/ContentContainer";



const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={`${classes.container}`}>
      <Navigation />
      <main>
        <ContentContainer>{children}</ContentContainer>
      </main>
    </div>
  );
};

export default MainLayout;
