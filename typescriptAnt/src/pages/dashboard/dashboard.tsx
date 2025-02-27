
const Dashboard = () => {
    const userRole=localStorage.getItem('user_role');     
  return (
    <div>
      <p>Here is your dashboard : {userRole} player</p>
    </div>
  )
}

export default Dashboard
