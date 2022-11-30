import React, { FC, PropsWithChildren, useState } from "react";
import classes from "./tooltip.module.scss";

interface TooltipProps {
  title: string;
}

const Tooltip: FC<TooltipProps & PropsWithChildren> = ({ title, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={classes["tool-tip"]}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show ? <span>{title}</span> : null}
    </div>
  );
};

export default Tooltip;
