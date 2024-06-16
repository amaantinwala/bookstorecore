import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider"

const Logout = () => {
  const [authUser, setauthUser]= useAuth();

  const handleLogout = () =>{
    try {
      setauthUser({
        ...authUser,
        user:null
      })
      localStorage.removeItem("Users");
      toast.success("Logout Successfully");
      setTimeout(() => {
        window.location.reload();
      },1000);
    } catch (error) {
      toast.error(error.message);
      setTimeout(() =>{},2000);
    }
  }
  return (
    <div>
        <button onClick={handleLogout} className="px-4 py-1 rounded-md bg-red-500 text-white">Logout</button>
    </div>
  )
}

export default Logout