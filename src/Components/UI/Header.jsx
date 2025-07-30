import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="logo">
          ReactQuery Tut
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink to="/" className="nav-item">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/trad" className="nav-item">
              FetchOld
            </NavLink>
          </li>
          <li>
            <NavLink to="/rq" className="nav-item">
              FetchRq
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
