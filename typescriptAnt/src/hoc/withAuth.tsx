// High order Component function that accepts a component and returns a new Component
// Purpose used to add common functionality to multiple Components without modifying the orginal code 
import { Navigate } from "react-router";
interface PropsWithAuth {
    allowedRoles?:string[]
}

const withAuth = () => {
  return (
    <div>
      
    </div>
  )
}

export default withAuth
