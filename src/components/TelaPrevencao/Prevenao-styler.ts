import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #a28181;
  font-family: "Poppins", sans-serif;
  width: 100%;
  color: #010101;
  gap: 5%;
  padding: 80px 5%;

  @media (max-width: 1366px) {
    gap: 50px;
    padding: 60px 5%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
    padding: 60px 4%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    padding: 40px 3%;
  }
`;

export const Imapre = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  img {
    width: 450px;
    max-width: 600px;
    border-radius: 8px;
  }

  @media (max-width: 1366px) {
    img {
      max-width: 608px;
    }
  }

  @media (max-width: 1024px) {
    img {
      max-width: 450px;
    }
  }

  @media (max-width: 768px) {
    img {
      max-width: 90%;
    }
  }
`;

export const ContentWrapper = styled.div`
  max-width: 700px;
  text-align: center;

  @media (max-width: 1024px) {
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const TextContent = styled.div`
  h1 {
    font-size: 33px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;

    line-height: 1.1;

}

p{
font-size: 20px;
}

`;

export const Textoprevencao = styled.div`
  margin-top: 20px;
  text-align: center;
  letter-spacing: 1px;
  color: #010101;
  font-size: 16px;
`;
export const Test = styled.div`
  margin-left: 23%;
`