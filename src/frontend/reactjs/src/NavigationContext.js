import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "./firebase";

const Navigation = createContext();

const NavigationContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: " success",
  });

  return (
    <Navigation.Provider
      value={{
        alert,
        setAlert,
        user,
        setUser,
      }}
    >
      {children}
    </Navigation.Provider>
  );
};

export default NavigationContext;

export const NavigationState = () => {
  return useContext(Navigation);
};
