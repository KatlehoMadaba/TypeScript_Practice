import { ThemeActionContext,ThemeStateContext } from "./context";
import {useMemo,useReducer,PropsWithChildren,FC} from "react";
import { useContext } from "react";
import { themeReducer } from "./reducer";
import {setThemeAction} from "./actions"
import {ThemeProviderProps} from "./context"
import {THEME_COLOUR_INTITAL_STATE} from "./context"

export const useThemeState=()=>{
    const context=useContext(ThemeStateContext);
    if(!context)
        throw new Error("useThemeState must be within a ThemeProvider");
    return context;
}
export const useThemeAction = () => {
    const context = useContext(ThemeActionContext);
    if (!context)
      throw new Error("useThemeAction must be within a ThemeProvider");
    return context;
  };

   export const ThemeProvider:FC<PropsWithChildren<ThemeProviderProps>>=(props)=>{
    const{children}=props
    const [state,dispatch]=useReducer(themeReducer,THEME_COLOUR_INTITAL_STATE);
  
    const themeConfig=useMemo(()=>{
      console.log("Memoized them state:",state);
      return state;
  },[state])
  
  const changeTheme =(theme:string)=>{
      console.log("Changing theme to",theme);
      dispatch(setThemeAction({theme}));
  }
  return(
    <ThemeStateContext.Provider value={themeConfig}>
    <ThemeActionContext.Provider value={{changeTheme}}>
        {children}
    </ThemeActionContext.Provider>
</ThemeStateContext.Provider>
  )
  
  }
 
 