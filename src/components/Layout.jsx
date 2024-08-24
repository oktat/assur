import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom';

function Layout() {
  const signedIn = localStorage.getItem('signedIn')
  const username = localStorage.getItem('username')

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-1">
        <div className="d-flex justify-content-end">
          Bejelentkezett: {username}
        </div>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to="/logout" className="nav-link">              
              Kilépés
            </Link>
          </li>
        </ul>
      </nav>

      <main>
      {signedIn ? <Outlet /> : <Navigate to="/login" /> }
      </main>
    </>
  )
}

export default Layout