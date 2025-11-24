import { useState } from "react";
import {
  HeaderContainer,
  Nav,
  Logo,
  LogoImg,
  MobileMenuButton,
  NavList,
  NavItem,
  NavLink,
  VoluntarioButton,
} from "./headerStyle1";

import logo from "../../assets/LogoSTM.png";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <LogoImg src={logo} alt="Logo" />
        </Logo>

        <MobileMenuButton onClick={() => setMenuOpen((prev) => !prev)}>
          ☰
        </MobileMenuButton>

        <NavList $open={menuOpen}>
          <NavItem>
            <NavLink to="/">Início</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/sobre">Sobre</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/acoes">Ações</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/prevencao">Prevenção</NavLink>
          </NavItem>

           <NavItem>
            <NavLink to="/voluntario">Seja voluntário</NavLink>
          </NavItem>


          <NavItem>
            <VoluntarioButton to="/apoie">Seja apoiador</VoluntarioButton>
          </NavItem>

          <NavItem>
            <NavLink to="/contato">Contato</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
}
