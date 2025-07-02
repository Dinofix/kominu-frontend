import './FeatureItem.scss';

interface FeatureItemProps {
  icon: string;
  alt: string;
  text: string;
}

const FeatureItem = ({ icon, alt, text}: FeatureItemProps) => {
  return (
    <div className="feature-item">
      <img src={icon} alt={alt} />
      <p>{text}</p>
    </div>
  )
}

export default FeatureItem;