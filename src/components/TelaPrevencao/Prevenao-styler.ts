import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #A28181;
  font-family: "Poppins", sans-serif;
  width: 100%;
  height: 100%;
  color: #010101;
  gap: 5%;


`;
export const Imapre = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left:5%;
  gap: 30px;
  margin-top: -100px;

  img{
    width: 140%;
  }
 

`
export const ContentWrapper = styled.div`
  margin-left: 7%;
  margin-top: -10%;
  

`
export const TextContent = styled.div`

h1 {
  font-size: 60px;
  margin-bottom: 20px;
  text-align: left;
  margin-top: 5%;
  text-align: center;
}

`

export const Textoprevencao = styled.div`
  line-height: 1.6;
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 60px;
  text-align: center;
  letter-spacing: 2px

`



