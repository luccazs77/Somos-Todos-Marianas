import styled from "styled-components";

export const Container = styled.div`
width: 95vw;
background-color: #A28181;
color: black;
display: flex;
justify-content: center;
align-items: center;
padding: 3rem 2rem;
flex-wrap: wrap;
gap: 15rem;
height: 100vh;

`

export const LeftSide = styled.div`
    display:  flex;
    justify-content: center;
    align-items: center;
    
    img{
    width: 600px;
    height: auto;
    margin-top: 200px;


    }

`

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 170px;
    min-width: 260px;
`

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    


    h3{
        font-weight: bold;
        justify-content: start;
        font-size: 35px;
        margin-top: -15px;
    }

    p{
        display: flex;
        align-items: center;
        gap:8px;
        font-weight: 500;
        font-size: 28px;
        margin-top: -15px;

    }

    
`

export const Partners = styled.div`
    background-color: #E3C7C5;
    padding: 1rem 2rem;
    border-radius: 22px;
    width: fit-content;
    font-size: 22px;
    display: flex;
    flex-direction: column;

    
    p{
        margin-bottom: 0.5rem;
         margin-top: -5px;

    }

`

export const List = styled.div`
    display: flex;
    gap: 4rem;
    flex-wrap: wrap;
    font-size: 20px;
   
   

    span{
        background-color: transparent;
        font-weight: 500;
       
    ;

    }


`

