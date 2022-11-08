import Link from 'next/link';

const Home = () => {
  return (
    <div className="page-wrapper">
      <h1 className="title">keep it simple</h1>
      <h2 className="subtitle">
        Beratung und Begleitung bei Deinem Weg zum eigenen Camper
      </h2>
      <div className="links">
        <div className="contact-link">
          <Link href="/kontakt">Kontakt</Link>
        </div>
        <div className="about-me-link">
          <Link href="/about-me">Über Mich</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
