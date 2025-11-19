import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #f5e0de;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  margin-top: -10px;

  @media (max-width: 768px) {
    height: 6rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 1%;
`;

// Logo sempre visível, centralizada no mobile
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 100px;
  height: 100px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 480px) {
    width: 65px;
    height: 65px;
  }
`;

// Botão de menu (hambúrguer) – aparece só no mobile
export const MobileMenuButton = styled.button`
  display: none;
  border: none;
  background: transparent;
  font-size: 2rem;
  color: #ca6e70;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Lista de links: horizontal no desktop, menu suspenso no mobile
export const NavList = styled.ul<{ $open: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  list-style-type: none;

  @media (max-width: 768px) {
    position: absolute;
    top: 6rem;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem 0;
    background-color: #f5e0de;
    border-top: 0.1rem solid #ca6e70;

    /* Abre/fecha o menu conforme o estado vindo do React */
    display: ${({ $open }) => ($open ? "flex" : "none")};
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  text-decoration: none;
  border-radius: 1.5rem;
  background-color: #f5e0de;
  border: 0.1rem solid #ca6e70;
  font-weight: 900;
  color: #ca6e70;
  font-family: "Roboto", sans-serif;
  padding: 0.7rem;
  transition: all 0.3s ease;
  display: inline-block;
  white-space: nowrap;
  font-size: 22px;

  &:hover {
    background-color: #ca6e70;
    color: #f5e0de;

  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.6rem 0.9rem;
  }
`;

export const VoluntarioButton = styled(NavLink)`
  background-color: #ca6e70;
  color: #f5e0de;

  &:hover {
    background-color: #f5e0de;
    color: #ca6e70;
  }
`;
