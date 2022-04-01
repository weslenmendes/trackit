import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./../pages/Login";
import { Register } from "./../pages/Register";
import { Habits } from "./../pages/Habits";

import { Header } from "./../components/Header";
import { Menu } from "./../components/Menu";

const AppRoutes = () => {
  // const params = useLocation();
  // console.log(params);

  // const showMenu = () => {
  //   if (pathname) {
  //     return pathname !== "/" || pathname !== "/register" ? (
  //       <>
  //         <Header />
  //         <Menu />
  //       </>
  //     ) : (
  //       <></>
  //     );
  //   }
  // };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/habits" element={<Habits />} />
      </Routes>
      <Menu />
    </BrowserRouter>
  );
};

export { AppRoutes };
