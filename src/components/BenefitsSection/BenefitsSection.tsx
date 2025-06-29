import './BenefitsSection.scss';
import cloud from '../../assets/cloud.svg';
import link from '../../assets/link-45deg.svg';

const BenefitsSection = () => {

  return (
    <div className='benefits-section'>
      <section className='cloud-section'>
        <img src={cloud} alt="molnsymbol" />
        <h2>Webbaserat</h2>
        <p>Kominu funkar direkt i webbläsaren. Inget att installera, bara att logga in och köra, var du än är.</p>
      </section>
      <section className='link-section'>
        <img src={link} alt="länksymbol" />
        <h2>Ingen bindningstid</h2>
        <p>Du väljer själv hur länge du vill använda Kominu, avsluta eller uppgradera när det passar dig, helt utan bindningstid.</p>
      </section>
    </div>
  )
}

export default BenefitsSection;