import { createContext, useState } from "react";

interface authContextType{
  user: any,
  login: (userData: any, token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const authContext = createContext<authContextType | undefined>(undefined);



