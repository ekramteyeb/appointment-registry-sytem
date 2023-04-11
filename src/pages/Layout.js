import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
      <>
          
      <nav className="App-header">
        <ul>
          <li>
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li>
            <Link className="nav-link" to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;