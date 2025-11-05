import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  background-color: #f5e0de;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  padding: 2.5rem 0 3rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 1.5rem 0;
  }
`;

export const NavigationHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  padding: 1%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeaderList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  list-style-type: none;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
`;

export const ButtonHeader = styled.button`
  border-radius: 999rem;
  padding: 1rem 2rem;
  background-color: #f5e0de;
  border: 0.1rem solid #ca6e70;
  font-weight: 900;
  color: #ca6e70;
  font-family: "Roboto", sans-serif;
  font-size: 1.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ca6e70;
    color: #f5e0de;
  }

  &.voluntario {
    background-color: #ca6e70;
    color: #f5e0de;

    &:hover {
      background-color: #f5e0de;
      color: #ca6e70;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 0.8rem 1.6rem;
  }
`;

export const TermsLink = styled.a`
  text-decoration: none;
`;
