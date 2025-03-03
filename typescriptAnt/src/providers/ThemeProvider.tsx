import {useContext,useMemo,useReducer,ReactNode} from "react";
import { ThemeActionContext,ThemeStateContext } from "./context";
import { themeReducer } from "./reducer";
import { setThemeAction } from "./actions";

interface ThemeProviderProps{
    children:ReactNode;
}

export const ThemeProvider:React.FC<ThemeProviderProps>=({children})=>{

    const [state,dispatch]=useReducer(themeReducer,{theme:"gray"});

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
    );
};

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

  
//   notees