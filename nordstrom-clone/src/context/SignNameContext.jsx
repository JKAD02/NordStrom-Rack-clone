import React, { createContext, useState } from "react";

export const SignNameContext = createContext();

export const SignNameContextProvider = ({ children }) => {
  const [userName, setUserName] = useState({
    email: "",
    name: "",
  });

  return (
    <SignNameContext.Provider value={{ userName, setUserName }}>
      {children}
    </SignNameContext.Provider>
  );
};

export default SignNameContext;
