import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import {Container,StyledLink, Title, Extrat, Footer} from './style';
import exit from '../../assets/exit.png';
import entrada from '../../assets/entrada.png';
import saida from '../../assets/saida.png';

export default function ExtratPage(){
    return(
        <Container>
            <Title>
                <h1>Olá,Fulano</h1>
                <img  src={exit} ></img>
            </Title>
            <Extrat>
                <h1>Não há registros de<br></br>entrada ou saída</h1>
            </Extrat>
            <Footer>
                <img src = {entrada}></img>
                <img src = {saida}></img>
            </Footer>     
        </Container>
    );
}