import React, { FC, PropsWithChildren } from "react";
import Portal from "../Portal/Portal";
import classes from "./modalOverlay.module.scss";

interface ModalOverlyProps {
  onClose: () => void;
}

const ModalOverlay: FC<ModalOverlyProps & PropsWithChildren> = ({
  onClose,
  children,
}) => {
  return (
    <Portal elementId="modal">
      <div className={classes.overlay}>
        <div className={classes.backdrop} onClick={onClose}></div>
        <div className={classes.modal}>{children}</div>
      </div>
    </Portal>
  );
};

export default ModalOverlay;
