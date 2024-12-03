import React from "react";
import { AuthProvider } from "./AuthContext";
import { UserProvider } from "./UserContext";
import { MockupProvider } from "./MockupContext";

const Providers: React.FC<any> = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <MockupProvider>{children}</MockupProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default Providers;
