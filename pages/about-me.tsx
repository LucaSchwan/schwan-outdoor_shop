import Head from 'next/head';

const AboutMe = () => {
  return (
    <div className="page-wrapper">
      <Head>
        <title>Über Mich</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="smaller-title">Über Mich</h1>
      <h2 className="smaller-subtitle">Folgt...</h2>
    </div>
  );
};

export default AboutMe;
