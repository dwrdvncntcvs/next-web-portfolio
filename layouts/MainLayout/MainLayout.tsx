import React, { FC, PropsWithChildren } from "react";
import { Navigation } from "../../components";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
