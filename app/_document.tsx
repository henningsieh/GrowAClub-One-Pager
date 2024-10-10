import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add any custom fonts, meta tags, or links here */}
          <link rel="icon" href="/icons/favicon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          {/* Add any other head elements here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
