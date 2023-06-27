import { GetStaticProps } from "next";
import React, { FC } from "react";
import { Header } from "layouts";
import { Skill } from "models/SkillsData";
import classes from "styles/skill.module.scss";
import Head from "next/head";
import { Soft, Technical } from "components/Skills";
import { HOSTNAME } from "variables";
import { getStoreState, storeDispatch } from "store/redux";
import { getSkillsData } from "store/redux/api/skillsPageApi";

interface SkillProps {
    data: Skill;
}

const Skills: FC<SkillProps> = ({ data }) => {
    return (
        <>
            <Head>
                <title>Skills</title>
                <meta property="og:title" content="Skills" />
                <meta property="og:description" content={data.description} />
                <meta
                    property="og:image"
                    content={`${HOSTNAME}/_next/static/media/dwrdvncntcvs_logo.f13cb62f.png?w=256`}
                />
                <meta property="og:type" content="website" />
                <meta property="fb:app_id" content="864647734963796" />
                <meta property="og:url" content={HOSTNAME} />
            </Head>
            <div id={classes.skills}>
                <Header description={data.description} title="skills." />
                <div className={classes["row-content"]}>
                    <Soft softSkills={data.soft} />
                    <Technical technicalSkills={data.technical} />
                </div>
            </div>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    await storeDispatch(getSkillsData());
    const { data } = getStoreState("skillData");

    return { props: { data } };
};

export default Skills;
