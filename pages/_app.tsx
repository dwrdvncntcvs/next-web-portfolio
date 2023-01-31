import "styles/globals.css";
import type { AppProps } from "next/app";
import { MainLayout } from "layouts";
import usePageLoader from "hooks/usePageLoader";
import { LogoLoading } from "components/Global";
import { store } from "../store/redux";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  const pageLoading = usePageLoader();

  return (
    <Provider store={store}>
      <MainLayout>
        {pageLoading ? <LogoLoading /> : <Component {...pageProps} />}
      </MainLayout>
    </Provider>
  );
}
