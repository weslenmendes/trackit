import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login";

import { GlobalStyles } from "./styles/GlobalStyles";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
