import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter, BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import './index.css'
import {Provider} from "react-redux"
import App from './App.jsx'
import AppContext from './components/app-context.jsx'
import ReduxContext from "./components/ReduxContext.jsx"
import Store from "./redux/store.js";
import HomePage from './pages/home-page.jsx'
import AboutPage from './pages/about-page.jsx'
import Dashboard from './pages/dashboard.jsx'
import DashboardHome from './pages/dashboard-home.jsx'
import DashboardUsers from './pages/dashboard-users.jsx'
import PublicLayout from './layouts/public-layout.jsx'
import ProtectedLayout from './layouts/protected-layout.jsx'

const router = createBrowserRouter([
  // { path: '/', element: <HomePage/>},
  // { path: '/about', element: <AboutPage/>}
  {
    element: <PublicLayout />,
    children: [
      { path: '/', element: <HomePage/>},
      { path: '/about', element: <AboutPage/>},
      { 
        element: <ProtectedLayout />,
        path: "dashboard",
        children: [
          { path: "", element: <DashboardHome/>},
          { path: "users", element: <DashboardUsers/>}
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider store={Store}>
      <ReduxContext/>
    </Provider> */}
    {/* <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/dashboard' element={<Dashboard/>} >
           <Route index element={<DashboardHome />} />
           <Route path='users' element={<DashboardUsers/>} ></Route>
        </Route>
      </Routes>
    </Router> */}

    <RouterProvider router={router} />
  </StrictMode>,
)
