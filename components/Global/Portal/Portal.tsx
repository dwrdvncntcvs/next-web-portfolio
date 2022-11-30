import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  elementId: string;
}

const Portal: FC<PortalProps & PropsWithChildren> = ({
  elementId,
  children,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, [elementId]);

  return mounted
    ? createPortal(children, document.getElementById(elementId)!)
    : null;
};

export default Portal;
