import { Navigate } from "react-router-dom";

function Logout() {
  localStorage.removeItem('signedIn')
  
  return (
    <Navigate to="/login" />
  )
}

export default Logout
