import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Index.module.scss';

const Home = () => {
  return (
    <div className="page-wrapper">
      <Head>
        <title>Home</title>
      </Head>
      <h1 className={styles.title}>keep it simple</h1>
      <h2 className={styles.subtitle}>
        Beratung und Begleitung bei Deinem Weg zum eigenen Camper
      </h2>
      <div className={styles.links}>
        <div className={styles.contact_link}>
          <Link href="/kontakt">Kontakt</Link>
        </div>
        <div className={styles.about_me_link}>
          <Link href="/about-me">Über Mich</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
