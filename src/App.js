import { useState } from "react";
import { AppRoutes as Routes } from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";
import { UserContext } from "./contexts/UserContext";

import { getLocalStorage as getItem } from "./utils";

const initialState = {
  todayTotalHabits: 0,
  todayTotalHabitsCompleted: 0,
  percentage: 0,
};

export default function App() {
  const [user, setUser] = useState(getItem("user"));
  const [habitsInfo, setHabitsInfo] = useState(initialState);

  return (
    <UserContext.Provider value={{ user, setUser, habitsInfo, setHabitsInfo }}>
      <GlobalStyles />
      <Routes />
    </UserContext.Provider>
  );
}
