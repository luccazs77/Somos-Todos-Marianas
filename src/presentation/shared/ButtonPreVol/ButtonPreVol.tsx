import React from "react";
import * as S from "./ButtonPre-styles";


interface ButtonLinkProps {
  href: string;
  variant?: "outlined" | "filled";
  children: React.ReactNode;
}

export function ButtonLink({ href, variant = "outlined", children }: ButtonLinkProps) {
  return (
    <S.StyledButtonLink to={href} $variant={variant}>
      {children}
    </S.StyledButtonLink>
  );
}

/* Componente para agrupar botões lado a lado */
export const ButtonRow = ({ children }: { children: React.ReactNode }) => {
  return <S.ButtonGroup>{children}</S.ButtonGroup>;
};
