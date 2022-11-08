import Head from 'next/head';

const Contact = () => {
  return (
    <div className="page-wrapper">
      <Head>
        <title>Kontakt</title>
      </Head>
      <h1 className="smaller-title">Kontakt</h1>
      <h2 className="smaller-subtitle">
        Wenn Du Kontakt mit mir aufnehmen möchtest, <br />
        schreib mir doch eine Email oder ruf mich an.
      </h2>
      <div className="contact-info">
        <div>
          <a href="mailto:rainer@schwan-outdoor.shop">
            rainer@schwan-outdoor.shop
          </a>
        </div>
        <div>
          <a href="tel:0174-3810892">0174-3810892</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
