import Head from 'next/head';
import styles from '../styles/Contact.module.scss';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Kontakt</title>
      </Head>
      <h1 className={styles.smaller_title}>Kontakt</h1>
      <h2 className={styles.smaller_subtitle}>
        Wenn Du Kontakt mit mir aufnehmen möchtest, <br />
        schreib mir doch eine Email oder ruf mich an.
      </h2>
      <div className={styles.contact_info}>
        <div>
          <a href="mailto:rainer@schwan-outdoor.shop">
            rainer@schwan-outdoor.shop
          </a>
        </div>
        <div>
          <a href="tel:0174-3810892">0174-3810892</a>
        </div>
      </div>
    </>
  );
};

export default Contact;
