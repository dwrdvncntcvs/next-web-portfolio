import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ContentContainer, MainLayout } from "../layouts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
