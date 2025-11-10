import React from "react";
import logo from "../../../assets/logoz.png"
import * as S  from "./header-styles";

export function Header() {

  return (
    <S.HeaderContainer>
      <S.Nav>
        <S.Logo>
          <S.LogoImg src={logo} alt="S.Logo SOMOSTODOSMARIANAS" />
        </S.Logo>
        <S.NavList>
          <S.NavItem><S.NavLink href="#">Início</S.NavLink></S.NavItem>
          <S.NavItem><S.NavLink href="#">Quem somos</S.NavLink></S.NavItem>
          <S.NavItem><S.NavLink href="#">Ações</S.NavLink></S.NavItem>
          <S.NavItem><S.NavLink href="#">Educação</S.NavLink></S.NavItem>
          <S.NavItem><S.NavLink href="#">Prevenção</S.NavLink></S.NavItem>
          <S.NavItem><S.NavLink href="#">Seja um apoiador</S.NavLink></S.NavItem>
          <S.NavItem>
            <S.VoluntarioButton href="#">Seja um voluntário</S.VoluntarioButton>
          </S.NavItem>
          <S.NavItem><S.NavLink href="#">Contato</S.NavLink></S.NavItem>
        </S.NavList>
      </S.Nav>
    </S.HeaderContainer>
  );
};


