import "../styles/globals.css";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
     <Layout>
     {/* <Component {...pageProps} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />  */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap"
          rel="stylesheet"
        /> */}

      
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./ico/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./ico/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./ico/favicon-16x16.png"
        />
        <link rel="manifest" href="/ico/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/ico/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/ico/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/ico/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      
       <Component {...pageProps} />
      </Layout> 
    </>
  );
}

export default MyApp;
