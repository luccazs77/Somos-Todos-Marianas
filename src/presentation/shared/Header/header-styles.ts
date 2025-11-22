import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #F5E0DE;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  margin-top: -10px;

  @media (max-width: 768px) {
    justify-content: center;
    height: 6rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  padding: 1%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* Para garantir que a logo continue visível mesmo quando o nav for ocultado */
  @media (max-width: 768px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
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

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  list-style-type: none;
`;

export const NavItem = styled.li``;

export const NavLink = styled(Link)`
  text-decoration: none;
  border-radius: 999rem;
  background-color: #f5e0de;
  border: 0.1rem solid #ca6e70;
  font-weight: 900;
  color: #ca6e70;
  font-family: "Roboto", sans-serif;
  padding: 0.7rem;
  transition: all 0.3s ease;

  display: inline-block; 
  white-space: nowrap;   

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
