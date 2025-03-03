import { createContext } from "react";

//A new context called ThemeStateContext is created expected to hold a single property called theme of type string .
//The context value can either an object with a theme property or undefined 
//And  initial value provided is undefined,which means if the component tries to consume this with out a provider it will be undefined 
export const ThemeStateContext=createContext<{theme:string} | undefined>(undefined);

//New context ThemeActionContext ,holds a function object named changeTheme takes an argument (theme)and it return void because it returns nothing
export const ThemeActionContext=createContext<{changeTheme:(theme:string)=>void} |undefined>(undefined)