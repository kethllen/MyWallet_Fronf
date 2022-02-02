import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  background-color: #8C11BE;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
font-family:'Saira Stencil One', cursive;
font-size: 32px;
color: #FFFFFF;
font-style: normal;
font-weight: 400;
line-height: 50px;
letter-spacing: 0em;
text-align: left;
margin-bottom: 24px;
`
const Input = styled.div`
display: flex;
flex-direction: column;
input{
  height: 58px;
  width: 326px;
  left: 25px;
  top: 233px;
  border-radius: 5px;
    margin-bottom: 3%;
    background-color: #FFFFFF;
    border:none;
    ::placeholder {
    color: #000000;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    text-align: left;
  }
}
button{
  height: 46px;
width: 326px;
border-radius: 5px;
border: none;
color: #FFFFFF;
margin-bottom: 36px;
    background-color:#A328D6;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: center;
}
`
const StyledLink = styled(Link)`
  color: #FFFFFF;
  text-decoration: underline;
  cursor: pointer; 
  font-family: 'Raleway', sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: 18px;
letter-spacing: 0em;
text-align: left;

`;

export {
  Container,
  StyledLink,
  Title,
  Input
}