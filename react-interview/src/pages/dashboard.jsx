import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <header>Dashboard header</header>
        <main>
            <Outlet />
        </main>
        <footer>Dashboard footer</footer>
    </div>
  )
}

export default Dashboard