import React, { createContext, useContext, useState } from "react";

interface IUser {
  id: string;
  full_name: string;
  email: string;
}

interface IUserContextData {
  user: IUser | null;
  setUser(user: IUser | null): void;
}

// Tipando o contexto diretamente com IUserContextData
const UserContext = createContext<IUserContextData>({} as IUserContextData);

const UserProvider: React.FC<any> = ({ children }) => {
  // Inicializando o estado `user` como null, para sinalizar que não há usuário inicialmente
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

function useUser(): IUserContextData {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUser };
