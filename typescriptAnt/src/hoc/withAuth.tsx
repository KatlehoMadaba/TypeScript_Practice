// High order Component function that accepts a component and returns a new Component
// Purpose used to add common functionality to multiple Components without modifying the orginal code 
import { Navigate } from "react-router";
interface PropsWithAuth {
    allowedRoles?:string[]
}

const withAuth = () => {
  return (props:any)=>{
        //get the auth token from the local storage
        const token =localStorage.getItem('auth_token');
        const userRole=localStorage.getItem('user_role');
           //checking if the token exits
    if(!token){
        //the user will be redirected to login page and the current page is replaced in the history stack preventing
        //the user form navigating  back to current page using the broswer back button protection from unauth access
        return <Navigate to="/login" replace/>
    }
    if(allowedRoles.length > 0 && !allowedRoles.includes.includes(userRole || '') ){
        if (userRole === 'admin') {
            return <Navigate to="/admin" replace />;
          }
          return <Navigate to="/client" replace />;
        }
    
        return <WrappedComponent {...props} />;
    }
   
  };
export default withAuth;
