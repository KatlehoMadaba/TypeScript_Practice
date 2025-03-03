import { useContext,useMemo, useReducer, ReactNode } from "react";
import { AuthStateContext } from "./context";
import { loginReducer } from "./reducer";
import { loginAction } from "./actions";

interface AuthProviderProps {
    children: ReactNode;
    allowedRoles?:string[]
}

interface AuthContextType {
    state: { username: string; password: string };
    login: (newUser: { username: string; password: string }) => void;
    logout: () => void;
}


export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

    const initialState = { username: "katleho", password: "123" };

    const [state, dispatch] = useReducer(loginReducer, initialState);

    function login(newUser: { username: string; password: string }) {
        console.log("Dispatching", newUser);
        dispatch(loginAction(newUser));
    }

    function logout() {
        console.log("Logging Out");
        dispatch(loginAction({ username: "", password: "" }));
    }

    return (
        <AuthStateContext.Provider value={{state, login, logout }}>
            {children}
        </AuthStateContext.Provider>
    );
};
export const useLoginState=()=>{
    const context =useContext(AuthStateContext);
    if(!context)
        throw new Error("useThemeState must be within a ThemeProvider");
    return context;
}