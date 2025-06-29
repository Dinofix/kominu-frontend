import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__background" />
      <div className="hero__overlay">
        <h1>
          <span>Slipp papper och manuella listor</span>
          <span className="highlight">KOMINU gör jobbet</span>
        </h1>
        <a href="https://visitor.kominu.se/register"
        className="btn btn-cta"
        target="_blank"
        rel="noopener noreferrer"
        >
          Prova gratis</a>
      </div>
    </section>
  );
};

export default Hero;
