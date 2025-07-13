import React from 'react'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
  return (
    <div>
        <header>Public Layout Header</header>
        <main>
            <Outlet />
        </main>
        <footer>Public Layout Footer</footer>
    </div>
  )
}

export default PublicLayout