import { Router } from "next/router";
import { useState } from "react";

const usePageLoader = () => {
  const [pageLoading, setPageLoading] = useState(false);

  Router.events.on("routeChangeStart", () => {
    setPageLoading(true);
  });

  Router.events.on("routeChangeComplete", () => {
    setPageLoading(false);
  });

  return pageLoading;
};

export default usePageLoader;
