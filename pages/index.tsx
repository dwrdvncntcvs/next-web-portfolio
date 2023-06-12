import { GetStaticProps } from "next";
import React, { FC } from "react";
import { HomeModelData } from "models/HomeData";
import classes from "styles/home.module.scss";
import { IconDisplay } from "components/Global";
import { useRouter } from "next/router";
import Head from "next/head";
import { HOSTNAME } from "variables";
import ButtonLinks from "components/Global/ButtonLinks/ButtonLinks";
import HomeDetails from "components/Home/HomeDetails";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { collection, getDocs } from "firebase/firestore";
import { db } from "configs/firebase";
import useModal from "hooks/useModal";
import '@react-pdf-viewer/core/lib/styles/index.css';

interface StaticProps {
    data: HomeModelData;
}

const Home: FC<StaticProps> = ({ data }) => {
    const { Modal, toggleModal } = useModal();

    return (
        <>
            <Head>
                <title>{data.name}</title>
                <meta property="og:title" content={data.name} />
                <meta property="og:description" content={data.description} />
                <meta
                    property="og:image"
                    content={`${HOSTNAME}/_next/static/media/dwrdvncntcvs_logo.f13cb62f.png?w=256`}
                />
                <meta property="og:type" content="website" />
                <meta property="fb:app_id" content="864647734963796" />
                <meta property="og:url" content={HOSTNAME} />
            </Head>
            <div id={classes.home}>
                <section>
                    <HomeDetails
                        description={data.description}
                        greetings={data.greetings}
                        name={data.name}
                    />
                    <div className={classes["btn-group"]}>
                        <button onClick={toggleModal(true)}>CV</button>
                        <ButtonLinks />
                    </div>
                </section>
                <IconDisplay />
            </div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.7.107/build/pdf.worker.min.js">
                <Modal>
                    <Viewer fileUrl={data.resume} />
                </Modal>
            </Worker>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const homeCollection = collection(db, "home");

    const homeDocs = await getDocs(homeCollection);
    const [data] = homeDocs.docs.map((docs) => ({
        id: docs.id,
        ...docs.data(),
    }));

    return {
        props: {
            data,
        },
    };
};

export default Home;
