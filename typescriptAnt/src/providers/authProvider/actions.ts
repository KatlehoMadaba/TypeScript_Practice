import {createAction} from "redux-actions"
import { IUSER, IUserStateContext } from "./context"

export enum UserActionEnum{
    CreateUserRequest='CREATE'
}

export const CreateUserRequestAction=createAction<IUserStateContext,IUSER>(UserActionEnum.CreateUserRequest,(UserCreated)=>({UserCreated}));

//first type:return type of function 
//second type:payload 
//createAction takes parameters:Action Type & Payload 

// export const AuthActionEnums={
//     login:"LOGIN"
// }
// interface LoginPayload{
//     username:string;
//     password:string;
// }
// export const loginAction =createAction<LoginPayload,LoginPayload>(
//     AuthActionEnums.login,
//     ({username,password})=>{
//         return{
//             username,
//             password
//         }
//     }
// )