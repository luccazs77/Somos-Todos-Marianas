import styled from "styled-components";
import fundo from "../../assets/wallpaper.png"

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 84.5vh;
  background-image: url(${fundo});
  background-color: white;
  font-family: "Poppins", sans-serif;
`;

export const DivContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  height: 100vh;
  margin-top: 150px;
  background-image: url(${fundo});

  color: #000000;
  font-family: "Poppins", sans-serif;
  @media  (max-width: 768px) {
  flex-direction: column-reverse;
    margin-top: 20px;
    gap: 18px;

  }
`;

export const Texto = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;
margin-left: 100px;

p{
  text-align: center;
  font-size: 25px;
  padding: 35px;
  opacity: 80%;
  line-height: 1.6;
}
@media  (max-width: 768px) {
    margin: 0 auto;
    p{

        font-size: 18px;
    }
}
`
export const Textoh1 = styled.h1`
font-size: 50px;
@media  (max-width: 768px) {
    font-size: 25px;
}

`
export const ImagemFoto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 10%;
  img{
    height: 450px;
  }
 @media  (max-width: 768px) {
     margin: 0 auto;
    img{
    height: 200px;
  }
}

`
export const Section = styled.div`

  

`

