import {handleActions} from "redux-actions";
import { UserActionEnum} from "./actions";
import {IUserStateContext,INITAL_USER_STATE } from './context';

// 

export const UserReducer=handleActions<IUserStateContext,IUserStateContext>(
    {
        [UserActionEnum.CreateUserRequest]:(incomingState:IUserStateContext,action:ReduxActions.Action<IUserStateContext>)=>{
            
            const {payload}=action;
            console.log(payload)
            // // eslint-disable-next-line no-debugger
            // debugger;
            return{
                ...incomingState,
                ...payload
            }
        }
    }
    ,INITAL_USER_STATE
)


// interface AuthState{
//     username:string;
//     password:string;
// }
// const initialState:AuthState={
//     username:"",
//     password:""
// }
// export const loginReducer =handleAction<AuthState,{username:string;password:string}>(
//     AuthActionEnums.login,
//     (state,action)=>({
//         ...state,
//         username:action.payload.username,
//         password:action.payload.password,
//     }),
//     initialState
// )