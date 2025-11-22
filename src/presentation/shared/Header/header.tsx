import React from "react";
import logo from "../../../assets/logoz.png"
import * as S from "./header-styles";

export function Header() {
  return (
    <S.HeaderContainer>
      <S.Nav>
        <S.Logo>
          <S.LogoImg src={logo} alt="Logo SOMOSTODOSMARIANAS" />
        </S.Logo>

        <S.NavList>

          <S.NavItem>
            <S.NavLink to="/inicio">Início</S.NavLink>
          </S.NavItem>

          <S.NavItem>
            <S.NavLink to="/quem-somos">Quem somos</S.NavLink>
          </S.NavItem>

          <S.NavItem>
            <S.NavLink to="/acoes">Ações</S.NavLink>
          </S.NavItem>

          <S.NavItem>
            <S.NavLink to="/educacao">Educação</S.NavLink>
          </S.NavItem>

          <S.NavItem>
            <S.NavLink to="/prevencao">Prevenção</S.NavLink>
          </S.NavItem>

          <S.NavItem>
            <S.NavLink to="/apoiador">Seja um apoiador</S.NavLink>
          </S.NavItem>

          {/* Botão vermelho igual ao da foto */}
          <S.NavItem>
            <S.VoluntarioButton to="/voluntario">
              Seja um voluntário
            </S.VoluntarioButton>
          </S.NavItem>

          <S.NavItem>
            <S.NavLink to="/contato">Contato</S.NavLink>
          </S.NavItem>

        </S.NavList>
      </S.Nav>
    </S.HeaderContainer>
  );
}
