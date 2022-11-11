import Head from 'next/head';
import styles from '../styles/About-Me.module.scss';

const AboutMe = () => {
  return (
    <div>
      <Head>
        <title>Über Mich</title>
      </Head>
      <h1 className={styles.smaller_title}>Über Mich</h1>
      <h2 className={styles.smaller_subtitle}>Folgt...</h2>
    </div>
  );
};

export default AboutMe;
