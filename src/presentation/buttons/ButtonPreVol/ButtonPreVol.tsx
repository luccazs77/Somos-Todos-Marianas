import { StyledButtonLink } from "./ButtonPre-styles";

interface ButtonLinkProps {
  to: string; // trocado aqui
  variant?: "outlined" | "filled";
  children: React.ReactNode;
}

export function ButtonLink({ to, variant = "outlined", children }: ButtonLinkProps) {
  return (
    <StyledButtonLink to={to} $variant={variant}>
      {children}
    </StyledButtonLink>
  );
}
