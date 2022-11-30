import Image from "next/image";
import Link from "next/link";
import React from "react";
import classes from "./navigation.module.scss";
import { HiHome, HiCode, HiUser, HiFolder, HiBriefcase, HiBookmark } from "react-icons/hi";
import { SiFacebook, SiTwitter, SiLinkedin } from "react-icons/si";
import { useRouter } from "next/router";
import { app_logo } from "../../../assets/images";
import { LinkType } from "../../../interfaces/navigation";

const Navigation = () => {
  const { asPath } = useRouter();

  const links: LinkType[] = [
    { Icon: HiHome, label: "Home", to: "/" },
    { Icon: HiCode, label: "Skills", to: "/skills" },
    { Icon: HiFolder, label: "Portfolio", to: "/portfolio" },
    { Icon: HiBriefcase, label: "Experience", to: "/experiences" },
    { Icon: HiBookmark, label: "Experience", to: "/certificates" },
    { Icon: HiUser, label: "About Me", to: "/about-me" },
  ];

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
    <nav className={classes.navigation}>
      <div className={classes.title}>
        <Link href="/">
          <Image
            src={app_logo.src}
            alt=""
            width={100}
            height={100}
            loader={({ src, width }) => `${src}?w=${width}`}
          />
        </Link>
      </div>
      <div className={classes.links}>
        {links.map(({ Icon, label, to }, i) => {
          return (
            <Link
              className={to === asPath ? classes.active : ""}
              href={to}
              key={i}
            >
              <Icon id={classes.icon} />
            </Link>
          );
        })}
      </div>
      <div className={classes.footer}>
        <p>
          Developed By: <span>dwrdvncntcvs</span>
        </p>
        <div className={classes["social-links"]}>
          {socialMediaLinks.map(({ Icon, label, to }, i) => (
            <Link key={i} href={to} target="_blank">
              <Icon id={classes["social-icon"]} />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
