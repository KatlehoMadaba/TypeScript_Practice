import {createAction} from "redux-actions"


export const AuthActionEnums={
    login:"LOGIN"
}
interface LoginPayload{
    username:string;
    password:string;
}
export const loginAction =createAction<LoginPayload,LoginPayload>(
    AuthActionEnums.login,
    ({username,password})=>{
        return{
            username,
            password
        }
    }
)