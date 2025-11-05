import React from "react";
import logo from "../assets/logoz.png"
import {
  HeaderContainer,
  Nav,
  Logo,
  LogoImg,
  NavList,
  NavItem,
  NavLink,
  VoluntarioButton,
} from "./headerStyles";

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <LogoImg src={logo} alt="Logo SOMOSTODOSMARIANAS" />
        </Logo>
        <NavList>
          <NavItem><NavLink href="#">Início</NavLink></NavItem>
          <NavItem><NavLink href="#">Quem somos</NavLink></NavItem>
          <NavItem><NavLink href="#">Ações</NavLink></NavItem>
          <NavItem><NavLink href="#">Educação</NavLink></NavItem>
          <NavItem><NavLink href="#">Prevenção</NavLink></NavItem>
          <NavItem><NavLink href="#">Seja um apoiador</NavLink></NavItem>
          <NavItem>
            <VoluntarioButton href="#">Seja um voluntário</VoluntarioButton>
          </NavItem>
          <NavItem><NavLink href="#">Contato</NavLink></NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
