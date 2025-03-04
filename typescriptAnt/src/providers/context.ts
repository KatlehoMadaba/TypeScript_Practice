import { createContext, ReactNode } from "react";
export interface IThemeType {
    theme:string;
}
export interface ThemeProviderProps{
    children:ReactNode;
}

export interface IThemeActionsContext{
    changeTheme:(theme:string)=>void
}
//A new context called ThemeStateContext is created expected to hold a single property called theme of type string .
//The context value can either an object with a theme property or undefined 
//And  initial value provided is undefined,which means if the component tries to consume this with out a provider it will be undefined 
export const ThemeStateContext=createContext<IThemeType | undefined>(undefined);

//New context ThemeActionContext ,holds a function object named changeTheme takes an argument (theme)and it return void because it returns nothing
export const ThemeActionContext=createContext<IThemeActionsContext |undefined>(undefined)

//This interface specifies the shape of the payload for the setTheme action.
//The payload must be an object with a single property, theme, which is of type string.
export interface ISetThemePayload{
    theme:string;
}


export const THEME_COLOUR_INTITAL_STATE:IThemeType={
    theme:"gray"
}

export interface UserContextType {
    state: { username: string; password: string };
    login: (newUser: { username: string; password: string }) => void;
    logout: () => void;
}
