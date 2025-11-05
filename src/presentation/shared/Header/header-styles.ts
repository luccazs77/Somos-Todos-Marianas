import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #f5e0de;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7rem;
  margin-top: -10px

`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  padding: 1%;
`;

export const Logo = styled.div``;

export const LogoImg = styled.img`
  width: 100px;
  height: 100px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  list-style-type: none;
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  text-decoration: none;
  border-radius: 999rem;
  background-color: #f5e0de;
  border: 0.1rem solid #ca6e70;
  font-weight: 900;
  color: #ca6e70;
  font-family: "Roboto", sans-serif;
  padding: 0.7rem;
  transition: all 0.3s ease;

  display: inline-block; /* Impede quebra de linha automática */
  white-space: nowrap;   /* Mantém o texto todo na mesma linha */

  &:hover {
    background-color: #ca6e70;
    color: #f5e0de;
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
