import './VisitorHero.scss';
import QR from '../../assets/LogoVisitor/qr-code.svg'
import GDPR from '../../assets/LogoVisitor/shield-fill-check.svg'
import FeatureItem from '../FeatureItem/FeatureItem'
import Loggar from '../../assets/LogoVisitor/receipt-cutoff.svg'
import Envelope from '../../assets/LogoVisitor/envelope-fill.svg'


const VisitorHero = () => {

  return (
    <div className='visitorCard'>
      <h2>Välkommen till vårt besöksystem</h2>

      <section>
        <FeatureItem icon={QR} alt="QR-kod" text="Digital incheckning med QR-kod" />
        <FeatureItem icon={Loggar} alt='Loggar' text='Automatisk logg över besök' />
        <FeatureItem icon={GDPR} alt="GDPR" text="GDPR-anpassad besökshantering" />
        <FeatureItem icon={Envelope} alt='Envelope' text='Notifiering till anställda när gäster anländer' />
      </section>


    </div>
  )
}

export default VisitorHero;