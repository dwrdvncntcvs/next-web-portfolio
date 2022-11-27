import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id="overlay"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
