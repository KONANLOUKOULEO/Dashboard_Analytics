import { createContext, useContext, useEffect, useState } from "react";

const ContextTheme = createContext({
  isdark: false,
  toggelTheme: () => {},
});

export const ProviderTheme = ({ children }) => {
  const [isdark, setTheme] = useState(() => {
    const theme = localStorage.getItem("theme");
    return theme ? JSON.parse(theme) : false;
  });

  const toggelTheme=() => {
    setTheme(!isdark)
  }

   useEffect(()=>{
      localStorage.setItem("theme",JSON.stringify(isdark))
    },[isdark])


  return (
    <ContextTheme.Provider value={{ isdark, toggelTheme }}>
      {children}
    </ContextTheme.Provider>
  );
};

export const useTheme = () => useContext(ContextTheme);
