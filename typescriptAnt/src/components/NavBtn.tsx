import { useNavigate } from "react-router"

const  NavBtn:React.FC=()=> {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate("/login");
  }
  return (
    <button onClick={handleClick}>
      Get Started
    </button>
  )
}

export default NavBtn
