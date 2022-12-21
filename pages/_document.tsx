import Document, { Head, Html, Main, NextScript } from "next/document";
import { app_logo } from "../assets/images";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href={app_logo.src} type="image/icon type" />
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
