import React, { createContext, useState } from "react";

const AlertsContext = createContext();

const AlertsContextProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  return (
    <AlertsContext.Provider value={{ alerts, setAlerts }}>
      {children}
    </AlertsContext.Provider>
  );
};

export { AlertsContext, AlertsContextProvider };
