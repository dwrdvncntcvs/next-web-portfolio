import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import React, { FC } from "react";
import { db } from "../../../configs/firebase";
import { ContentContainer } from "../../../layouts";
import { ProjectDetailsData } from "../../../models/PortfolioData";
import { generateDate, getIcon, TechnicalIcon } from "../../../utils/helper";
import { HiLink } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { SKILL_TYPE_VAR } from "../../../variable";

interface ProjectDetailsProps {
  data: string;
}

const customLoader = ({ src, width }: { src: string; width: number }) =>
  `${src}w=${width}`;

const ProjectDetails: FC<ProjectDetailsProps> = ({ data }) => {
  const {
    appLink,
    description,
    details,
    images,
    mainImage,
    repository,
    technologies,
  } = JSON.parse(data) as ProjectDetailsData;

  return (
    <ContentContainer>
      <div>
        <section>
          <Image
            src={mainImage}
            alt={details.title}
            width={300}
            height={300}
            loader={customLoader}
          />
          <p>
            <SiGithub /> {repository}
          </p>
          <h1>{details.title}</h1>
          <p>{details.role}</p>
          <p>
            {generateDate(details.createdAt)} - {generateDate(details.endedAt)}
          </p>
        </section>
        <section>
          <h1>description.</h1>
          <p>{description}</p>
          {appLink ? (
            <a>
              <HiLink /> {appLink}
            </a>
          ) : null}
        </section>
        <section>
          <ul>
            {technologies.map(({ icon, title }) => {
              const { Icon, color } = getIcon<TechnicalIcon>(
                icon,
                SKILL_TYPE_VAR.TECHNICAL
              );
              return (
                <li key={icon}>
                  <Icon color={color} /> {title}
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          {images.map((image, i) => (
            <Image
              src={image}
              alt=""
              key={i}
              width={300}
              height={300}
              loader={customLoader}
            />
          ))}
        </section>
      </div>
    </ContentContainer>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const portfolioDetailsCollection = collection(db, "portfolioDetails");
  const portfolioDetails = await getDocs(portfolioDetailsCollection);
  const data = portfolioDetails.docs.map((doc) => ({
    params: { projectId: doc.id },
  }));

  return { paths: data, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const portfolioRef = doc(db, "portfolioDetails", params?.projectId as string);
  const portfolioDetails = await getDoc(portfolioRef);
  const docData = portfolioDetails.data();

  const data = JSON.stringify({
    ...{
      ...docData,
    },
  });

  return { props: { data } };
};

export default ProjectDetails;
