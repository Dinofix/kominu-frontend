import "./Footer.scss";
import logo from "../../assets/kominu.png";
import linkedin from "../../assets/LI.png";
import facebook from "../../assets/FB.png";
import instagram from "../../assets/IG.png";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <section className="footer__logo">
        <img src={logo} alt="Footer logo" />
      </section>

      <div className="footerContainer">
        <section className="footer__contact">
          <h3>Kontaktinformation</h3>
          <p>Adnan Ajdinovic</p>
          <a href="tel:+46735463659">073 - 546 36 59</a>
          <a href="mailto:adnan@kominu.se">adnan@kominu.se</a>
        </section>
        <section className="footer__social">
          <h3>Sociala medier</h3>
          <p>Följ oss på våra sociala medier</p>
          <a href="https://www.linkedin.com/company/kominu/about/">
            <img src={linkedin} alt="Linkedin logo" />
          </a>
          <a href="https://www.facebook.com/kominu.se">
            <img src={facebook} alt="Facebook logo" />
          </a>
          <a href="https://www.instagram.com/kominu.se/">
            <img src={instagram} alt="Instagram logo" />
          </a>
        </section>
      </div>

      <section className="footer__copyright">
        <p>© 2025 KOMINU</p>
      </section>
    </footer>
  );
};

export default Footer;
