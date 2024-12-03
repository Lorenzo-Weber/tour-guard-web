import React, { createContext, useContext, useEffect, useState } from "react";

interface IMockup {
  fullest: number;
}

// Tipando o contexto diretamente com IMockupContextData
const MockupContext = createContext<IMockup>({} as IMockup);

const MockupProvider: React.FC<any> = ({ children }) => {
  // Inicializando o estado `user` como null, para sinalizar que não há usuário inicialmente
  const [regions, setRegions] = useState<IMockup | null>(null);

  const [fullest, setFullest] = useState<number>(
    Math.floor(Math.random() * 150) + 501
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setFullest(fullest + Math.floor(Math.random() * 7) - 3);
    }, 5000);

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullest]);

  return (
    <MockupContext.Provider value={{ fullest }}>
      {children}
    </MockupContext.Provider>
  );
};

function useMockup(): IMockup {
  const context = useContext(MockupContext);
  if (!context) {
    throw new Error("useMockup must be used within a MockupProvider");
  }
  return context;
}

export { MockupProvider, useMockup };
