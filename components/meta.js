import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content="reliable taxis in Stirling, cheap taxis in Stirling, book a taxi in Stirling, taxi service in Stirling" />
      <meta name="description" content="Sky Cabs is a reliable and affordable taxi service in Stirling. We offer a variety of vehicles to choose from, and we can accommodate any size group. Book your taxi online today!" />
      <meta charSet="utf-8" />
      <link rel="icon" href="./favicon.ico" />
      <title>  {title} </title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Sky Cabs | Taxis in Stirling",
  keywords: "Reliable taxis in Stirling, Cheap taxis in Stirling, Book a taxi in Stirling, Taxi service in Stirling",
  description: "Sky Cabs is a reliable and affordable taxi service in Stirling. We offer a variety of vehicles to choose from, and we can accommodate any size group. Book your taxi online today!"
};

export default Meta;
