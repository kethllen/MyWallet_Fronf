import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import TokenContext from "./contexts/TokenContext";
import SingUpPage from "./components/SingUpPage"

export default function App() {
  const [token, setToken] = useState('');
  return (
    <TokenContext.Provider value={{token, setToken}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/sing-up" element={<SingUpPage/>} />
            </Routes>
        </BrowserRouter>
    </TokenContext.Provider>
  );
}