 import { Route,Routes } from "react-router-dom";
import ReactDOM from "react-dom";
//import Login from "./pages/login/login"
// import ClientLayout from "./layouts/client"
// import AdminLayout from "./layouts/admin"
 import EmptyLayout from "./layouts/empty"
// import AboutPage from "./pages/about/about"
// import HomePage from "./pages/home/home"
// import withAuth from "./hoc/withAuth";
// import Dashboard from "./pages/dashboard/dashboard";
import SplashPage from "./pages/splash/splash";
import SignupPage from "./pages/sign-up/sign-up";
import { ThemeProvider } from "./providers/index";
import { UserProvider } from "./providers/authProvider";
// //Wrapped components with auth 
// const HomeProtected =withAuth(HomePage,{allowedRoles:['admin']})
// const AboutProtected =withAuth(AboutPage,{allowedRoles:['client']})
// //Protected layouts 
// const AdminLayoutProtected=withAuth(AdminLayout,{allowedRoles:['admin']});
// const ClientLayoutProtect=withAuth(ClientLayout,{allowedRoles:['client']});
// // const DashboardProtected=withAuth(Dashboard,{allowedRoles})
function App() {
return (
<ThemeProvider>
  <UserProvider>
<Routes>
<Route path="/" element={<EmptyLayout/>}>
         <Route index element={<SignupPage/>}/>
         <Route path="splash" element={<SplashPage/>}/>
         {/* <Route path="login" element={<Login />}/> */}
         <Route path="sign-up" element={<SignupPage/>}/>
</Route>
</Routes>
  </UserProvider>
</ThemeProvider>

)
}

export default App
