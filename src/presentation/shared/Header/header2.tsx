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
import logo from "../../../assets/LogoSTM.png"


export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <LogoImg src = {logo} alt="Logo" />
        </Logo>

        {/* Botão hambúrguer visível só no mobile */}
        <MobileMenuButton onClick={() => setMenuOpen((prev) => !prev)}>
          ☰
        </MobileMenuButton>

        {/* Lista recebe o estado para abrir/fechar no mobile */}
        <NavList $open={menuOpen}>
          <NavItem>
            <NavLink href="#home">Início</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#sobre">Sobre</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contato">Ações</NavLink>
          </NavItem>
          <NavItem>
            <VoluntarioButton href="#voluntario">
              Seja voluntário
            </VoluntarioButton>
          </NavItem>
          <NavItem>
            <VoluntarioButton href="#voluntario">
              Seja apoiador
            </VoluntarioButton>
          </NavItem>
          <NavItem>
            <VoluntarioButton href="#voluntario">
              Contato
            </VoluntarioButton>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
}
