import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";

import "@/styles/globals.css";
import "@/styles/locomotive-scroll.css";

import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  display: "swap",
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/assets/Logo.png" sizes="any" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/Logo.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Your App Description Here" />
        <meta name="author" content="Kishore Balaji" />
        <title>Kishore Balaji</title>
      </Head>

      <div lang="en" className={dmSans.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
