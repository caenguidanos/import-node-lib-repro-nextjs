import util from "util"; // <-- breaks with "node:util"

import { AppProps } from "next/app";

if (typeof window === "undefined") {
  console.deep = (payload: unknown, depth = 100) => {
    console.log(util.inspect(payload, false, depth, true));
  };
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
