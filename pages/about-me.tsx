import Head from 'next/head';
import styles from '../styles/About-Me.module.scss';

const AboutMe = () => {
  return (
    <>
      <Head>
        <title>Über Mich</title>
      </Head>
      <h1 className={styles.smaller_title}>Über Mich</h1>
      <div className={styles.about_me_text}>
        <p>
          Mein Name ist Rainer Schwan, ich bin gelernter Kaufmann, Tischler und
          Sozialpädagoge.
        </p>
        <br />
        <p>
          Neben meiner selbständigen Tätigkeit im sozialen Bereich, möchte ich
          mein Wissen, meine Fähigkeiten und Erfahrungen als gelernter Tischler
          und begeisterter Camper an Selbstausbauer weitergeben und Dir beratend
          und helfend zur Seite stehen.
        </p>
        <br />
        <p>
          Die Idee einen „outdoor.shop“ ( Draußen-Werkstatt ) zu gründen
          entstand aus dem Wunsch Busse auszubauen. Leider kann man sich in
          Deutschland als Tischlergeselle nicht einfach selbständig machen.
          Deshalb entstand der „outdoor.shop“ (Draußen-Laden) um Vorort Beratung
          und Hilfe anzubieten. Wie weit diese im Einzelnen geht, hängt von
          Deinen persönlichen Fähigkeiten ab.
        </p>
        <br />
        <p>
          Ich biete bewusst keinen Internet-Shop an, da ich Dich persönlich
          beraten möchte, um gezielt Produkte zu besorgen, und wenn gewünscht,
          Dich bei Deinem Ausbau zu begleiten und mit Rat und Tat zur Seite
          stehen.
        </p>
      </div>
    </>
  );
};

export default AboutMe;
