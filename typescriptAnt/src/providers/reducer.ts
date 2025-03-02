import { handleAction } from "redux-actions";
import {ThemeActionEnums} from "./actions"

interface ThemeState{
    theme:string;
}

const initialState:ThemeState={
    theme:"gray"
}

//Type Parameters:
//<ThemeState>>The overall state type that the reducer manages.
//{ theme: string }: The type of the payload carried by the action.


//Handle Action takes 3 agruments:
//Actiontype "SET_THEME">>tells reducer to handle actions with the type "SET_THEME"
//A function with two arguments:current state & action 
//Default state: intialState
export const themeReducer=handleAction<ThemeState,{theme:string}>(
    ThemeActionEnums.setTheme,//Action Type which is SET_THEME
    //function:
    (state,action)=>({
        ...state,//copies existing properties
        theme:action.payload.theme,//updates them property with the value from the actions payload
    }),
    initialState//default state
)