import {
  IconVar,
  SKILL_TYPE_VAR,
  SOFT_ICON_VAR,
  TECHNICAL_ICON_VAR,
} from "../variable";
import { IconType } from "react-icons";

const getIcon = (iconName: string, type: string) => {
  let icon: IconVar[];

  if (type === SKILL_TYPE_VAR.SOFT)
    icon = SOFT_ICON_VAR.filter((icon) => icon.ref === iconName);

  if (type === SKILL_TYPE_VAR.TECHNICAL)
    icon = TECHNICAL_ICON_VAR.filter((icon) => icon.ref === iconName);

  let iconObj: { Icon: IconType; color?: string };

  if (icon![0]["color"] === undefined) iconObj = { Icon: icon![0].value };
  else iconObj = { Icon: icon![0].value, color: icon![0].color };

  return icon!.length > 0 ? iconObj : null;
};

export { getIcon };
