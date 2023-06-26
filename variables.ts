import { HiChatAlt2, HiClock, HiFire, HiSparkles } from "react-icons/hi";
import {
    SiReact,
    SiNodedotjs,
    SiJavascript,
    SiAngular,
    SiSequelize,
    SiTypescript,
    SiExpress,
    SiPython,
    SiDjango,
    SiIonic,
    SiFirebase,
    SiPostgresql,
    SiSass,
    SiYarn,
    SiNpm,
    SiCapacitor,
    SiLeaflet,
    SiHtml5,
    SiCss3,
    SiRedux,
    SiVite,
} from "react-icons/si";
import { IconType } from "react-icons";

export interface IconVar {
    value: IconType;
    ref: string;
    color?: string;
}

const SOFT_ICON_VAR: IconVar[] = [
    {
        value: HiChatAlt2,
        ref: "message",
    },
    {
        value: HiClock,
        ref: "time",
    },
    {
        value: HiFire,
        ref: "fire",
    },
    {
        value: HiSparkles,
        ref: "sparkles",
    },
];

const TECHNICAL_ICON_VAR: IconVar[] = [
    {
        value: SiReact,
        ref: "react",
        color: "#61DAFB",
    },
    {
        value: SiNodedotjs,
        ref: "nodejs",
        color: "#339933",
    },
    {
        value: SiJavascript,
        ref: "javascript",
        color: "#F7DF1E",
    },
    {
        value: SiAngular,
        ref: "angularjs",
        color: "#DD0031",
    },
    {
        value: SiSequelize,
        ref: "sequelize",
        color: "#52B0E7",
    },
    {
        value: SiTypescript,
        ref: "typescript",
        color: "#3178C6",
    },
    {
        value: SiExpress,
        ref: "express",
        color: "#000000",
    },
    {
        value: SiPython,
        ref: "python",
        color: "#3776AB",
    },
    {
        value: SiDjango,
        ref: "django",
        color: "#2ba977",
    },
    {
        value: SiIonic,
        ref: "ionic",
        color: "#3880FF",
    },
    {
        value: SiFirebase,
        ref: "firebase",
        color: "#FFCA28",
    },
    {
        value: SiPostgresql,
        ref: "postgresql",
        color: "#4169E1",
    },
    {
        value: SiSass,
        ref: "sass",
        color: "#CC6699",
    },
    {
        value: SiYarn,
        ref: "yarn",
        color: "#2C8EBB",
    },
    {
        value: SiNpm,
        ref: "npm",
        color: "#CB3837",
    },
    {
        value: SiCapacitor,
        ref: "capacitor",
        color: "#119EFF",
    },
    {
        value: SiLeaflet,
        ref: "leaflet",
        color: "#199900",
    },
    {
        value: SiHtml5,
        ref: "html5",
        color: "#E34F26",
    },
    {
        value: SiCss3,
        ref: "css3",
        color: "#1572B6",
    },
    {
        value: SiRedux,
        ref: "redux",
        color: "#764ABC",
    },
    {
        value: SiVite,
        ref: "vite",
        color: "#646CFF",
    },
];

const SKILL_TYPE_VAR = {
    SOFT: "soft",
    TECHNICAL: "technical",
};

const HOSTNAME =
    typeof window !== "undefined" && window.location.hostname
        ? `${window.location.protocol}//${window.location.host}`
        : "";

const BASE_URL = process.env.NEXT_APP_BASE_URL;

const F_COLLECTION = {
    HOME: "home",
    SKILLS: "skills",
    PORTFOLIO: "portfolio",
};

export {
    SKILL_TYPE_VAR,
    TECHNICAL_ICON_VAR,
    SOFT_ICON_VAR,
    HOSTNAME,
    BASE_URL,
    F_COLLECTION,
};
