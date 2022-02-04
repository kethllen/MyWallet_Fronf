import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import {Container, Title, Input} from './style';

export default function EntradaPage(){
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    const navigate = useNavigate();
    function handleEntrada(e) {
         e.preventDefault();
         const promise = axios.post("http://localhost:5000/entrada", {
                valor,
                descricao,
                tipo: "entrada"
                });
           
                promise.then(response => {
                  navigate('/')
                });
                promise.catch(error => {
                alert(error.response.data.message)
                    setValor('');
                    setDescricao('');
               });
         }
    return(
        <Container>
            <Title>
                <h1>Nova entrada</h1>
            </Title>
            <form onSubmit={handleEntrada}>
                <Input>
                    <input type="text" value={valor} onChange={(e) => setValor(e.target.value)} placeholder="Valor"/>
                    <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descrição"/>
                    <button type="submit">Salvar entrada</button>
                </Input> 
            </form>
        </Container>
    );
}