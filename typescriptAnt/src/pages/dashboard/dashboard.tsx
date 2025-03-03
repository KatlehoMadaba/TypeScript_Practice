import ThemeSwitcher from "../../components/ThemeSwitcher";
const Dashboard = () => {
    const userRole=localStorage.getItem('user_role');     
  return (
    <div>
      <p>Here is your dashboard : {userRole} player</p>
      <ThemeSwitcher />
    </div>
  )
}

export default Dashboard
