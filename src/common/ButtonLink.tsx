import { Link } from 'react-router-dom'; // Importa Link de react-router-dom

export interface ButtonLinkProps {
  children?: React.ReactNode;
  to: string;                // Cambiado de href a to
  className?: string;
  target?: string;
  logo?: string;
  upperText?: string;
  lowerText?: string;
}

function ButtonLink({ to, children, className, target }: ButtonLinkProps) {
  return (
    <Link
      to={to}                
      className={className}
      target={target}
    >
      {children}            
    </Link>
  );
}

export default ButtonLink;



