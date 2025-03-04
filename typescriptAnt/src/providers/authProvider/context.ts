import { createContext,ReactNode} from "react";

export interface IUSER{
    Firstname:string,
    Lastname:string,
    Email:string,
    CreatedUsername:string,
    CreatePassword:string,
    ConfirmPassword:string;
    
}

export interface IUserStateContext{
    readonly UserCreated?:IUSER;
}

export const INITAL_USER_STATE:IUserStateContext={

}

//export const AuthStateContext=createContext<IUSER|undefined>(undefined)

export interface IUserActionsContext{//what type of cruds I  want create
    createUser?:(payload:IUSER)=>void;
    
}

const UserContext=createContext<IUserStateContext>(INITAL_USER_STATE);

const UserActionContext=createContext<IUserActionsContext>({});

export{UserContext,UserActionContext};

export interface UserProviderProps{
    children:ReactNode;
}
// export interface UserContextType {
//     state:IUSER;
//     createUser: (newUser:IUSER) => void;
//     logout: () => void;
// }
