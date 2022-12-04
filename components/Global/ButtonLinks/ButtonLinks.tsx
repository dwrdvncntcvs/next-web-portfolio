import { LinkType } from "interfaces/navigation";
import Link from "next/link";
import React from "react";
import { SiFacebook, SiLinkedin, SiTwitter } from "react-icons/si";
import classes from "./buttonLinks.module.scss";

const ButtonLinks = () => {
  const socialMediaLinks: LinkType[] = [
    {
      Icon: SiFacebook,
      label: "Facebook",
      to: "https://www.facebook.com/DwrdVncntCvs.7/",
    },
    {
      Icon: SiTwitter,
      label: "Facebook",
      to: "https://twitter.com/dwrdvncntcvs",
    },
    {
      Icon: SiLinkedin,
      label: "Facebook",
      to: "https://www.linkedin.com/in/edward-vincent-cuevas-5a2485240/",
    },
  ];

  return (
    <div className={classes.buttons}>
      {socialMediaLinks.map(({ Icon, to }, i) => (
        <Link className={classes.btn} key={i} href={to} target="_blank">
          <Icon />
        </Link>
      ))}
    </div>
  );
};

export default ButtonLinks;
