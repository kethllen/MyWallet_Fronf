import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import TokenContext from "./contexts/TokenContext";
import SingUpPage from "./components/SingUpPage";
import ExtratPage from "./components/ExtratPage";
import EntradaPage from "./components/EntradaPage";
import SaidaPage from "./components/SaidaPage";

export default function App() {
  const [token, setToken] = useState('');
  return (
    <TokenContext.Provider value={{token, setToken}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/sing-up" element={<SingUpPage/>} />
                <Route path="/extrat" element={<ExtratPage/>} />
                <Route path="/entrada" element={<EntradaPage/>} />
                <Route path="/saida" element={<SaidaPage/>} />
            </Routes>
        </BrowserRouter>
    </TokenContext.Provider>
  );
}