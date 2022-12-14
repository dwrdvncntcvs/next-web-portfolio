import {
  IconVar,
  SKILL_TYPE_VAR,
  SOFT_ICON_VAR,
  TECHNICAL_ICON_VAR,
} from "variables";
import { IconType } from "react-icons";
import dayjs from "dayjs";

export interface TechnicalIcon {
  Icon: IconType;
  color: string;
}

export interface SoftIcon {
  Icon: IconType;
}

const getIcon = <T = any>(iconName: string, type: string): T => {
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

const generateDate = (date: string) => {
  const newDate = new Date(JSON.parse(date).seconds * 1000);

  console.log();

  return newDate.toString() === "Invalid Date"
    ? "Present"
    : dayjs(newDate).format("MMMM YYYY");
};

const customImageLoader = ({ src, width }: { src: string; width: number }) =>
  `${src}w=${width}`;

export { getIcon, generateDate, customImageLoader };
