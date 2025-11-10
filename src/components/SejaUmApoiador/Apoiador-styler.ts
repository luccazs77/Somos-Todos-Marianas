import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #a28181;
  color: #010101;
  font-family: "Poppins", sans-serif;
  padding: 40px 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 120px;
  flex-wrap: wrap; /* Para telas menores */
  width: 100%;
  max-width: 1200px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 60px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const Title = styled.h1`
  font-size: 45px;
  font-weight: 700;
  margin: 80px 0 10px 0;
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  font-size: 17px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export const PixBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e3c7c5;
  border: 3px solid #bd4a4c;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 500px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

  p {
    margin: 6px 0;
    color: #000;
    font-size: 16px;
  }

  span {
    font-size: 18px;
    font-weight: 700;
  }

  .pix-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  img {
    width: 25px;
    height: 25px;
  }
`;

export const QRCodeImage = styled.img`
  height: 260px;
  border-radius: 8px;
  margin-top: 60px;

  @media (max-width: 1024px) {
    margin-top: 20px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 30px;
`;

export const PrimaryButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: #bd4a4c;
  color: #fff;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s ease;
  width: fit-content;

  &:hover {
    background-color: #a13d3f;
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: #f5d5d4;
  color: #bd4a4c;
  border: 2px solid #bd4a4c;

  &:hover {
    background-color: #f0c1c0;
  }
`;
