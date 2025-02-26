import { Route,Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import Login from "./pages/login/login"
import ClientLayout from "./layouts/client"
import AdminLayout from "./layouts/admin"
import EmptyLayout from "./layouts/empty"
import AboutPage from "./pages/about/about"
import HomePage from "./pages/home/home"
function App() {
  return (
    <Routes>
      {/* Public Routes */}
      {/* The public routes are netsted inside the EmptyLayout Route  */}
      <Route path="/" element={<EmptyLayout/>}>
      {/* I dont think i understand why there is two routes for login */}
        <Route index element={<Login/>}/>
        <Route path="login" element={<Login/>}/>
      </Route>
      {/* Protected Admin Routes */}
      {/* Protect Client Routes */}
    </Routes>
  )
}

export default App
