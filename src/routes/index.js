import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./../pages/Login";
import { Register } from "./../pages/Register";
import { Habits } from "./../pages/Habits";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/habits" element={<Habits />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
