import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #f5e0de;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  padding: 2.5rem 0 3rem 0;

`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 1%;
`;

export const Logo = styled.div``;

export const LogoImg = styled.img`
  width: 140px;
  height: 140px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  list-style-type: none;
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  text-decoration: none;
  border-radius: 999rem;
  padding: 1rem;
  background-color: #f5e0de;
  border: 0.1rem solid #ca6e70;
  font-weight: 900;
  color: #ca6e70;
  font-family: "Roboto", sans-serif;
  font-size: 1.9rem;
  transition: all 0.3s ease;

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
