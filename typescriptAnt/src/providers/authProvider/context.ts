import { createContext } from "react";
export const AuthStateContext=createContext< {user:string} | undefined>(undefined);