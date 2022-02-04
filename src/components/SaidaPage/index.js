import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import {Container, Title, Input} from './style';

export default function EntradaPage(){
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    const navigate = useNavigate();
    function handleSaida(e) {
         e.preventDefault();
         const promise = axios.post("http://localhost:5000/entrada", {
                valor,
                descricao,
                tipo: "saida"
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
                <h1>Nova saída</h1>
            </Title>
            <form onSubmit={handleSaida}>
                <Input>
                    <input type="text" value={valor} onChange={(e) => setValor(e.target.value)} placeholder="Valor"/>
                    <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descrição"/>
                    <button type="submit">Salvar saída</button>
                </Input> 
            </form>
        </Container>
    );
}