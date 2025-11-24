import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #A28181;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8rem;
  height: 88vh;

  @media (max-width: 1280px) {
    gap: 6rem;
    padding: 2rem;
  }

  @media (max-width: 1024px) {
    gap: 4rem;
    padding: 2rem 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
    padding: 2rem 1rem;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 520px;
    height: auto;

    @media (max-width: 1280px) {
      width: 460px;
    }

    @media (max-width: 1024px) {
      width: 400px;
    }

    @media (max-width: 768px) {
      width: 300px;
    }

    @media (max-width: 480px) {
      width: 200px;
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;

  h3 {
    font-weight: bold;
    font-size: 32px;

    @media (max-width: 768px) {
      font-size: 26px;
    }

    @media (max-width: 480px) {
      font-size: 22px;
    }
  }

  p {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    font-size: 24px;

    svg {
      /* tamanho padrão dos ícones */
      width: 60px;
      height: 60px;

      @media (max-width: 768px) {
        width: 45px;
        height: 45px;
      }

      @media (max-width: 480px) {
        width: 30px;
        height: 30px;
      }
    }

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 17px;
      justify-content: center;
    }
  }
`;

export const Partners = styled.div`
  background-color: #E3C7C5;
  padding: 1rem 2rem;
  border-radius: 22px;
  width: fit-content;
  max-width: 450px; 
  font-size: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 17px;
    padding: 0.8rem 1.4rem;
    max-width: 360px; 
  }

  @media (max-width: 480px) {
    font-size: 15px;
    padding: 0.8rem 1rem;
    max-width: 280px; /* bem menor no mobile */
  }

  p {
    margin-bottom: 0.5rem;
  }
`;


export const List = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: row;
  font-size: 18px;

  @media (max-width: 768px) {
    gap: 2rem;
    font-size: 17px;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    font-size: 15px;
    justify-content: center;
  }

  span {
    font-weight: 500;
  }
`;
