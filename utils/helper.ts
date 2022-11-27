import {
  IconVar,
  SKILL_TYPE_VAR,
  SOFT_ICON_VAR,
  TECHNICAL_ICON_VAR,
} from "../variable";
import { IconType } from "react-icons";

export interface TechnicalIcon {
  Icon: IconType;
  color: string;
}

export interface SoftIcon {
  Icon: IconType;
}

const getIcon = <T = any>(iconName: string, type: string): T => {
  console.log("Icon name: ", iconName);
  let icon: IconVar;

  if (type === SKILL_TYPE_VAR.SOFT)
    icon = SOFT_ICON_VAR.filter((icon) => icon.ref === iconName)[0];

  if (type === SKILL_TYPE_VAR.TECHNICAL)
    icon = TECHNICAL_ICON_VAR.filter((icon) => icon.ref === iconName)[0];

  if (icon! === undefined) throw new Error("Invalid icon name");

  return {
    Icon: icon.value,
    color: icon.color,
  } as T;
};

export { getIcon };
