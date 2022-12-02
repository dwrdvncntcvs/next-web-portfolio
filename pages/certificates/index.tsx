import { doc, getDoc } from "firebase/firestore";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { FC } from "react";
import { PreviewImages } from "../../components/Images";
import { db } from "../../configs/firebase";
import useViewImages from "../../hooks/useViewImages";
import { Header } from "../../layouts";
import { CertificateData } from "../../models/CertificateData";
import classes from "../../styles/certificates.module.scss";
import { customImageLoader } from "../../utils/helper";

interface CertificatesProps {
  data: CertificateData;
}

const Certificates: FC<CertificatesProps> = ({ data }) => {
  const strImages = data.certificates.map(({ imageUrl }) => imageUrl);

  const { imagesArr, closeAction, isOpened, selectImage } =
    useViewImages(strImages);

  return (
    <>
      <Head>
        <title>Certificates</title>
      </Head>
      <section className={classes.certificates}>
        <Header description={data.description} title="certificates." />
        <ul className={classes["certificates-items"]}>
          {data.certificates.map(({ imageUrl, title }, i) => (
            <li key={title} onClick={() => selectImage(i)}>
              <Image
                src={imageUrl}
                alt={title}
                width={300}
                height={300}
                loader={customImageLoader}
              />
            </li>
          ))}
        </ul>
      </section>
      <PreviewImages
        images={imagesArr}
        isShown={isOpened}
        onClose={closeAction}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const docs = doc(db, "certificates", "RRSh2D5SDI9LeG8f5phq");
  const cert_docs = await getDoc(docs);
  const data = cert_docs.data() as CertificateData;

  return { props: { data } };
};

export default Certificates;
