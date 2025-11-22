'use client';
import logo from "../../../assets/logoz.png"
import * as S  from "./header-styles";
import { Link } from "react-router-dom";

export function Header() {

  return (
    <S.HeaderContainer>
      <S.Nav>
        <S.Logo>
          <S.LogoImg src={logo} alt="Logo SOMOSTODOSMARIANAS" />
        </S.Logo>

        <S.NavList>
          <S.NavItem><S.NavLink as={Link} to="/">Início</S.NavLink></S.NavItem>
          <S.NavItem><S.NavLink as={Link} to="/nossa-dor">Quem somos</S.NavLink></S.NavItem>
          <S.NavItem><S.NavLink as={Link} to="/acoes">Ações</S.NavLink></S.NavItem>
          <S.NavItem><S.NavLink as={Link} to="/educacao">Educação</S.NavLink></S.NavItem>
          <S.NavItem><S.NavLink as={Link} to="/prevencao">Prevenção</S.NavLink></S.NavItem>
          <S.NavItem><S.NavLink as={Link} to="/apoiador">Seja um apoiador</S.NavLink></S.NavItem>

          <S.NavItem>
            <S.VoluntarioButton as={Link} to="/voluntario">
              Seja um voluntário
            </S.VoluntarioButton>
          </S.NavItem>

          <S.NavItem><S.NavLink as={Link} to="/contato">Contato</S.NavLink></S.NavItem>
        </S.NavList>

      </S.Nav>
    </S.HeaderContainer>
  );
};
