import { useState } from "react";
import { AppRoutes as Routes } from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";
import { UserContext } from "./contexts/UserContext";

import { getLocalStorage as getItem } from "./utils";

export default function App() {
  const [user, setUser] = useState(getItem("user"));

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <GlobalStyles />
      <Routes />
    </UserContext.Provider>
  );
}
