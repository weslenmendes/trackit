import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Habits } from "./pages/Habits";

import { GlobalStyles } from "./styles/GlobalStyles";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/habits" element={<Habits />} />
      </Routes>
    </BrowserRouter>
  );
}
