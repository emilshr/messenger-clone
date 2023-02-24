import { Head, Html, Main, NextScript } from "next/document";

export default function Document(props) {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="A clone of Meta messenger developed by @emilshr"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.cdnfonts.com/css/helvetica-neue-9"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
