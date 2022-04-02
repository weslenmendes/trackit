import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./../pages/Login";
import { Register } from "./../pages/Register";
import { Habits } from "./../pages/Habits";
import { Today } from "./../pages/Today";

import { Header } from "./../components/Header";
import { Menu } from "./../components/Menu";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/today" element={<Today />} />
      </Routes>
      <Menu />
    </BrowserRouter>
  );
};

export { AppRoutes };
