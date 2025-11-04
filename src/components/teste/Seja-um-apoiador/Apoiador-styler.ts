import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: colun;
    justify-content: center;
    color: #010101;
    text-align: center;
    align-items: center;
    height: 100vh;
    background-color: #A28181;
    font-family: "Poppins", sans-serif;
    padding: 40px 20px;
    width: 100vw;
    margin: 0;
    gap: 40px;
    box-sizing: border-box;
`
export const TextContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;


`


export const ImgQRC = styled.img`
    height: 30vh;
    margin-top: -250px;

`
export const TextoH1 = styled.h1`
    font-size: 45px;
    margin-top: -300px;
    text-align: center;
    margin-bottom: 15px;

`

export const Subtitulo = styled.p`
    text-align: center;
    margin-bottom: 20px;
    line-height: 1.6;
    font-size: 18px;
    opacity: 100%;
`
export const PixBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #E3C7C5;
    border:4px solid #BD4A4C; 
    padding: 16;
    border-radius: 8px;
    margin-bottom:20px;
    width: 100%;
    height: 7vw;
    text-align: left;
    font-size: 16px;
    
    p{
        margin: 4px 0;
        color: #000000;
          margin-top: 13px;
          margin-left: 50px;
          font-size: 16px;
    }
    span {
        color: #000000;
        font-size: 18px;
        font-weight:bold;
       
    }
    .Pix-row{
        display: flex;
        align-items: center;
     
        margin-left: 50px;
    }
    img{
        width: 25px;
        height: 25px;
    }

    `


export const Textoh = styled.h1`
    font-size: 16px;
    margin-top: 50px;

`

export const Button = styled.button`
    display: block;
    background-color: #BD4A4C;
    color: white;
    padding: 12px 10px;
    font-size: 16px;
    font-weight:bold;
    border-radius: 30px;
    width: 40%;
    margin-left: 140px;



`
    


