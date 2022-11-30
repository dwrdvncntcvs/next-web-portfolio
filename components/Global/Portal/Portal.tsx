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
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(`#${elementId}`);
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, [elementId]);

  console.log("Doing something...");
  console.log(ref.current);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
};

export default Portal;
