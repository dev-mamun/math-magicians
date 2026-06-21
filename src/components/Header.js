/** ****************************************
 * Project: math-magicians
 * File: Header.js
 * Created: 4/7/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light mb-3 px-2" aria-label="Thirteenth navbar">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <a
            className="navbar-brand col-lg-3"
            href="/"
          >
            Math Magicians
          </a>
          <ul className="navbar-nav mb-2 mb-lg-0  ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/calculator">Calculator</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quotes">Quote</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
