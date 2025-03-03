import { Route,Routes } from "react-router-dom";
//import ReactDOM from "react-dom";
import Login from "./pages/login/login"
import ClientLayout from "./layouts/client"
import AdminLayout from "./layouts/admin"
import EmptyLayout from "./layouts/empty"
import AboutPage from "./pages/about/about"
import HomePage from "./pages/home/home"
import withAuth from "./hoc/withAuth";
import Dashboard from "./pages/dashboard/dashboard";
import SplashPage from "./pages/splash/splash";
import SignupPage from "./pages/sign-up/sign-up";
import { ThemeProvider } from "./providers/index";
//Wrapped components with auth 
const HomeProtected =withAuth(HomePage,{allowedRoles:['admin']})
const AboutProtected =withAuth(AboutPage,{allowedRoles:['client']})
//Protected layouts 
const AdminLayoutProtected=withAuth(AdminLayout,{allowedRoles:['admin']});
const ClientLayoutProtect=withAuth(ClientLayout,{allowedRoles:['client']});
// const DashboardProtected=withAuth(Dashboard,{allowedRoles})
function App() {
  return (
    <ThemeProvider>
    <Routes>
      {/* Public Routes */}
      {/* The public routes are netsted inside the EmptyLayout Route  */}
      <Route path="/" element={<EmptyLayout/>}>
        <Route index element={<SplashPage/>}/>
        <Route path="splash" element={<SplashPage/>}/>
        <Route path="login" element={<Login />}/>
        <Route path="sign-up" element={<SignupPage/>}/>
      </Route>
      {/* Protected Admin Routes */}
      <Route path="/admin" element={<AdminLayoutProtected/>}>
        {/* This is the default or the index when you land in the admin portal */}
        <Route index element={<Dashboard/>}/>
        {/* this where you will put the other pages that require the admin layout */}
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="about"element={<AboutProtected/>}/>
        <Route path="home" element={<HomeProtected/>}/>

      </Route>
      {/* Protect Client Routes */}
      <Route path="/client" element={<ClientLayoutProtect/>}>
      <Route index element={<Dashboard/>}/>
      <Route path="about"element={<AboutProtected/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
      </Route>
    </Routes>
  </ThemeProvider>

  )
}

export default App
