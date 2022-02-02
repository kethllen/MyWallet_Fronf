import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";

export default function App() {

  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
            </Routes>
        </BrowserRouter>
  );
}