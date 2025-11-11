import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #A28181;
  font-family: "Poppins", sans-serif;
  width: 100%;
  height: 100%;
  color: #010101;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 150px;
  flex-wrap: wrap; /* para responsividade */
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  text-align: left;
`;

export const TextoH1 = styled.h1`
  font-size: 45px;
  margin-bottom: 20px;
  text-align: center;
  margin-top: 150px;
`;

export const Subtitulo = styled.p`
  line-height: 1.6;
  font-size: 17px;
  margin-bottom: 20px;
  margin-top: -10px;
  text-align: center;
`;

export const PixBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #E3C7C5;
  border: 4px solid #BD4A4C;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  width: 100%;

  p {
    margin: 6px 0;
    color: #000;
    font-size: 16px;
    margin-left: 30px;
  }

  span {
    font-size: 18px;
    font-weight: bold;
  }

  .Pix-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  img {
    width: 25px;
    height: 25px;
    margin-left: -10px;
  }
`;

export const ImgQRC = styled.img`
  height: 35vh;
  border-radius: 8px;
  margin-top: 25%;
`;

export const Button = styled.button`
  background-color: #BD4A4C;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  width: fit-content;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #a13d3f;
  }
`;

export const Butonn = styled.div`
  display: flex;
  justify-content: center;
`;
export const Ligt = styled.div`

p{
  margin-left: 5px;
}
`;

