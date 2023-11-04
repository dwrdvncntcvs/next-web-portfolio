import Document, { Head, Html, Main, NextScript } from "next/document";
import { Logo } from "../assets/svgs";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href={Logo.src} type="image/icon type" />
        </Head>
        <body>
          <div id="modal"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
