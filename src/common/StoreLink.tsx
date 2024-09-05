import { Link } from 'react-router-dom';
import { ButtonLinkProps } from './ButtonLink';

function StoreLink({
  to,
  className,
  target,
  logo,
  upperText,
  lowerText,
}: ButtonLinkProps) {
  return (
    <Link to={to} className={className} target={target}>
      <img src={logo} alt={`${lowerText} logo`} className="w-5" />
      <div>
        <p className="text-xs">{upperText}</p>
        <p>{lowerText}</p>
      </div>
    </Link>
  );
}

export default StoreLink;



