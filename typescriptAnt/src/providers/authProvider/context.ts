import { createContext } from "react";
export interface IUSER{
    Firstname:string,
    Lastname:string,
    Age:number,
    Email:string,
    Username:string,
    Password:string,
}

export interface IUserStateContext{
    readonly USerCreated?:IUSER;
}

export const INITAL_USER_STATE:IUserStateContext={
    
}

export const AuthStateContext=createContext<{user:string}|undefined>(undefined)