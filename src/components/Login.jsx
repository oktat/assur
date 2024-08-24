import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      user.username === 'admin' && user.password === 'admin' ||
      user.username === 'eros' && user.password === 'titok'
    ) {      
      localStorage.setItem('signedIn', 'true');
      localStorage.setItem('username', user.username);
      navigate('/profile');  
    }
  }

  return (
    <div>
      <h1>Bejelentkezés</h1>
      
      <form className="loginForm">
        <fieldset className="bg-light p-3 rounded">          
          <div className="input">
            <label htmlFor="username"
            className='form-label'>Felhasználónév</label>
            <input type="text" name="username" id="username"
            className='form-control' 
            onChange={handleChange}
            value={user.username}
            />
          </div>
          <div className="input">
            <label htmlFor="password"
            className='form-label'>Jelszó</label>
            <input type="password" name="password" id="password"
            className='form-control' 
            onChange={handleChange} 
            value={user.password}
            />
          </div>
          
          <button type="submit"
          className='btn btn-primary mt-3'
          onClick={handleSubmit}>Belépés</button>
        </fieldset>
      </form>
      
    </div>
  )
}

export default Login
