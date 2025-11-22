import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background-color: #A28181;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
  flex-wrap: wrap;
  gap: 8rem;
  min-height: 100vh;

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
  }
`;

export const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 550px;
    height: auto;
    margin-top: -60px;

    @media (max-width: 1280px) {
      width: 480px;
    }

    @media (max-width: 1024px) {
      width: 420px;
      margin-top: -40px;
    }

    @media (max-width: 768px) {
      width: 320px;
      margin-top: -20px;
    }

    @media (max-width: 480px) {
      width: 250px;
      margin-top: -10px;
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: -70px;
  min-width: 260px;

  @media (max-width: 1024px) {
    margin-top: -40px;
  }

  @media (max-width: 768px) {
    margin-top: 0px;
    align-items: center;
    text-align: center;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h3 {
    font-weight: bold;
    font-size: 35px;
    margin-top: -15px;

    @media (max-width: 768px) {
      font-size: 28px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }

  p {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    font-size: 28px;
    margin-top: -15px;

    @media (max-width: 768px) {
      font-size: 22px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
      justify-content: center;
    }
  }
`;

export const Partners = styled.div`
  background-color: #E3C7C5;
  padding: 1rem 2rem;
  border-radius: 22px;
  width: fit-content;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }

  p {
    margin-bottom: 0.5rem;
    margin-top: -5px;
  }
`;

export const List = styled.div`
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
  font-size: 20px;

  @media (max-width: 768px) {
    gap: 2rem;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    font-size: 16px;
  }

  span {
    background-color: transparent;
    font-weight: 500;
  }
`;
