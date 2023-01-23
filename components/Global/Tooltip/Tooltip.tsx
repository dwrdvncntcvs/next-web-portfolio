import useWindowSize from "hooks/useWindowSize";
import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import classes from "./tooltip.module.scss";

interface TooltipProps {
  title: string;
}

const Tooltip: FC<TooltipProps & PropsWithChildren> = ({ title, children }) => {
  const [show, setShow] = useState(false);
  const { width } = useWindowSize();

  const shouldShowTooltip = width! > 1150;

  return (
    <div
      className={classes["tool-tip"]}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && shouldShowTooltip ? <span>{title}</span> : null}
    </div>
  );
};

export default Tooltip;
