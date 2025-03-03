import { handleActions} from "redux-actions";
import {ThemeActionEnums} from "./actions"
import { ISetThemePayload, IThemeType } from "./context";
import {THEME_COLOUR_INTITAL_STATE} from "./context"


//Type Parameters:
//<ThemeType>>The overall state type that the reducer manages.
//{ theme: string }: The type of the payload carried by the action.


//Handle Action takes 3 agruments:
//Actiontype "SET_THEME">>tells reducer to handle actions with the type "SET_THEME"
//A function with two arguments:current state & action 
//Default state: intialState

//export const themeReducer=handleAction<ThemeState,{theme:string}>(
//     ThemeActionEnums.setTheme,//Action Type which is SET_THEME
//     //function:
//     (state,action)=>({
//         ...state,//copies existing properties
//         theme:action.payload.theme,//updates them property with the value from the actions payload
//     }),
//     initialState//default state
// )

export const themeReducer=handleActions<IThemeType,IThemeType>(
    {
        [ThemeActionEnums.setTheme]:(state:IThemeType,action:ReduxActions.Action<ISetThemePayload>)=>{
            const {payload}=action;//destructuring action 
            console.log(payload)
            return{
                ...state,
                theme:payload.theme,
            }
        }
    }
    ,THEME_COLOUR_INTITAL_STATE
);

export default themeReducer ;