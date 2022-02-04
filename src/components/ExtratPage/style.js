import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  background-color: #8C11BE;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 326px;
    position: fixed;
    top:25px;
    h1{
        font-family: 'Raleway', sans-serif;
        font-size: 26px;
        font-style: normal;
        font-weight: 700;
        line-height: 31px;
        letter-spacing: 0em;
        text-align: left;
        color: #FFFFFF;
    }
    img{
        height: 24px;
        width: 23px;
        color: #FFFFFF;
    }

`
const Extrat = styled.div`
position: absolute;
top:78px;
height: 65vh;
width: 326px;
border-radius: 5px;
background-color: #FFFFFF;

h1{
    position: absolute;
    top:180px;
    left: 68px;
    height: 100%;
    color: #868686;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
}
`
const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 326px;
    position: fixed;
    bottom:16px;
    img{
        height: 114px;
        width: 155px;
        border-radius: 5px;
    }

`

export {
    Container,
    Extrat,
    Title,
    Footer
  }