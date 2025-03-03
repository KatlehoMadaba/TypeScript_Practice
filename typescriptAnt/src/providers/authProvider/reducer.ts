import {handleAction} from "redux-actions";
import { AuthActionEnums } from "./actions";

interface AuthState{
    username:string;
    password:string;
}
const initialState:AuthState={
    username:"",
    password:""
}
export const loginReducer =handleAction<AuthState,{username:string;password:string}>(
    AuthActionEnums.login,
    (state,action)=>({
        ...state,
        username:action.payload.username,
        password:action.payload.password,
    }),
    initialState
)