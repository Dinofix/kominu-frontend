import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__background" />
      <div className="hero__overlay">
        <h1>Slipp papper och manuella listor KOMINU gör jobbet</h1>
        <button className="btn btn-cta">Prova gratis</button>
      </div>
    </section>
  );
};

export default Hero;
