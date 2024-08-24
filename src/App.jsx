import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Layout from './components/Layout'
import { RouterProvider } from 'react-router-dom'
import Nopage from './components/Nopage'
import Profile from './components/Profile'
import Logout from './components/Logout'

function App() {

  const router = createBrowserRouter([

    { path: '/', element: <Home /> },
    { path: 'login', element: <Login /> },
    {
      element: <Layout />,
      children: [                
        { path: '/logout', element: <Logout /> },
        { path: '/profile', element: <Profile />  },        
      ]
     },
     { path: '*', element: <Nopage /> }

  ], {
    basename: '/m/assur'})

  return (
    <>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
