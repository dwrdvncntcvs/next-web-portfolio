import { useState, FC, PropsWithChildren } from "react";
import classes from "../styles/home.module.scss";
import { HiX } from "react-icons/hi";

const useModal = () => {
    const [show, setShow] = useState(false);

    const toggleModal = (toggle: boolean) => () => {
        setShow(toggle);
    };

    const Modal: FC<PropsWithChildren> = ({ children }) => {
        return show ? (
            <>
                <div
                    className={classes.backdrop}
                    onClick={toggleModal(false)}
                ></div>
                <div className={classes.modal}>
                    <button onClick={toggleModal(false)}>
                        <HiX />
                    </button>
                    {children}
                </div>
            </>
        ) : null;
    };

    return { Modal, toggleModal };
};

export default useModal;
