// components/Layout.jsx
import { Outlet, NavLink } from 'react-router-dom'

function Layout() {
  return (
    <>
        <header>
            <nav style={{ marginBottom: 20 }}>
                <NavLink to="/">Home</NavLink> | <NavLink to="/about">About</NavLink> | <NavLink to="/category">Categories</NavLink> | <NavLink to="/category/html">HTML</NavLink> | <NavLink to="/category/css">CSS</NavLink> | <NavLink to="/category/javascript">javasSript</NavLink> | <NavLink to="/category/react">React</NavLink>
            </nav>
        </header>
        <main>
        {/* This is where nested routes will render */}
        <Outlet />
        </main>
    </>
  )
}
export default Layout