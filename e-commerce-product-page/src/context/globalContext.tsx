import { createContext, useState } from "react";

export const globalContext = createContext();

export function globalContextProvider({ children }: { children: React.ReactNode }) {//+
  const [name, setName] = useState("")//+
  return (
    <globalContext.Provider value={{
      name,
      setName,//+
      // Add more state and methods here if needed...
    }}>//+
      {children}
    </globalContext.Provider>
  )
}