import "styles/globals.css";
import type { AppProps } from "next/app";
import { MainLayout } from "layouts";
import usePageLoader from "hooks/usePageLoader";
import { LogoLoading } from "components/Global";

export default function App({ Component, pageProps }: AppProps) {
  const pageLoading = usePageLoader();

  return (
    <MainLayout>
      {pageLoading ? <LogoLoading /> : <Component {...pageProps} />}
    </MainLayout>
  );
}
