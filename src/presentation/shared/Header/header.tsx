
import logo from "../../../assets/logoz.png";
import {
  HeaderContainer,
  Nav,
  Logo,
  LogoImg,
  NavList,
  NavItem,
  VoluntarioButton,
} from "./header-styles";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <LogoImg src={logo} alt="Logo SOMOSTODOSMARIANAS" />
        </Logo>
        <NavList>
          <NavItem><Link to="/">Início</Link></NavItem>
          <NavItem><Link to="/quem-somos">Quem somos</Link></NavItem>
          <NavItem><Link to="/acoes">Ações</Link></NavItem>
          <NavItem><Link to="/educacao">Educação</Link></NavItem>
          <NavItem><Link to="/prevencao">Prevenção</Link></NavItem>
          <NavItem><Link to="/seja-um-apoiador">Seja um apoiador</Link></NavItem>
          <NavItem>
            <VoluntarioButton as={Link} to="/contato">
              Seja um voluntário
            </VoluntarioButton>
          </NavItem>
          <NavItem><Link to="/contato">Contato</Link></NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
}
