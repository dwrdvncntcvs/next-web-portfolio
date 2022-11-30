import React, { FC, PropsWithChildren } from "react";
import Portal from "../Portal/Portal";
import classes from "./modal.module.scss";

interface ModalOverlayProps {
  onClose: () => void;
}

const ModalOverlay: FC<PropsWithChildren & ModalOverlayProps> = ({
  children,
  onClose,
}) => {
  return (
    <Portal elementId="modal">
      <div id={classes.overlay}>
        <div className={classes.backdrop} onClick={onClose}></div>
        <div className={classes.modal}>{children}</div>
      </div>
    </Portal>
  );
};

export default ModalOverlay;
