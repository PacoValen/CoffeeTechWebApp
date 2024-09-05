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
    <a
      href={to}
      children={children}
      className={className}
      target={target}
    ></a>
  );
}

export default ButtonLink;


