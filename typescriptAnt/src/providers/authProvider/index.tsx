import { useContext, useReducer,PropsWithChildren,FC} from "react";
import bcrypt from 'bcryptjs';
import{INITAL_USER_STATE, UserProviderProps,IUSER, UserContext, UserActionContext} from "./context"
import { UserReducer } from "./reducer";
import { CreateUserRequestAction } from "./actions";



const UserProvider:FC<PropsWithChildren<UserProviderProps>> = ({ children }) => {
    // const storedUser=localStorage.getItem("user");
    // const intialState=storedUser?JSON.parse(storedUser):INITAL_USER_STATE;
    
    
    
    const [state,dispatch]=useReducer(UserReducer,INITAL_USER_STATE);
    
    const usersRegistered:string=(param:string):IUSER=>{JSON.parse(localStorage.getItem(param)) || [];
     
    const encryptedPassword:string=(values:IUSER)=>{
        const password:string=values.CreatePassword;
        const saltRounds:number=10;
        //encryption
        const hasedPassword:string=bcrypt.hashSync(password,saltRounds);
        console.log("Here is your hasded password",hasedPassword)
        //matching
       
        const isMatch:boolean=bcrypt.compareSync(password,hasedPassword)
        console.log("The password is match",isMatch)
        
      }  
    const createUser=async(payload:IUSER)=>{
        try{
            const encryptedPassword:string=()=>void
            
            localStorage.setItem("user",JSON.stringify(payload));

            dispatch(CreateUserRequestAction(payload));
        }
        catch(error)
        {
            console.log("Erorr storing the user",error)
        }
    }t


 
    return (
        //! meaning that by the time i get to this point my state will have a value 
        <UserContext.Provider value={state}>
            <UserActionContext.Provider value={{createUser}} >
                {children}
            </UserActionContext.Provider>
        </UserContext.Provider>
    )
}

}
const UseUseState=()=>{
    const context =useContext(UserContext);
    if(!context){
        throw new Error('useAuthActions must be in AuthProvider')
    }
    return context
}


const UseUserAcionState=()=>{
    const context =useContext(UserActionContext);
    if(!context){
        throw new Error('useAuthActions must be in AuthProvider')
    }
    return context
}

const UseUsers=()=>{
    return{
        ...UseUseState(),
        ...UseUserAcionState()
    }
}

export {UseUsers,UserProvider};

// import { useContext,useMemo, useReducer, ReactNode } from "react";
// import { AuthStateContext } from "./context";
// import { loginReducer } from "./reducer";
// import { loginAction } from "./actions";

// interface AuthProviderProps {
//     children: ReactNode;
//     allowedRoles?:string[]
// }

// interface AuthContextType {
//     state: { username: string; password: string };
//     login: (newUser: { username: string; password: string }) => void;
//     logout: () => void;
// }


// export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

//     const initialState = { username: "katleho", password: "123" };

//     const [state, dispatch] = useReducer(loginReducer, initialState);

//     function login(newUser: { username: string; password: string }) {
//         console.log("Dispatching", newUser);
//         dispatch(loginAction(newUser));
//     }

//     function logout() {
//         console.log("Logging Out");
//         dispatch(loginAction({ username: "", password: "" }));
//     }

//     return (
//         <AuthStateContext.Provider value={{state, login, logout }}>
//             {children}
//         </AuthStateContext.Provider>
//     );
// };
// export const useLoginState=()=>{
//     const context =useContext(AuthStateContext);
//     if(!context)
//         throw new Error("useThemeState must be within a ThemeProvider");
//     return context;
// }