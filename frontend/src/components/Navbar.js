import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((o) => !o);
  const closeNavbar = () => setOpen(false);

  const location = useLocation();
  const isChat = location.pathname === '/chat';

  return (
    <nav className="navbar navbar-dark fixed-top navbar-glass" style={{ zIndex: 1000 }}>
      <div className="container-fluid d-flex align-items-center position-relative justify-content-between">
        {isChat && (
          <Link to="/" className="btn btn-sm btn-outline-light me-2 back-btn-nav" style={{ zIndex: 1100 }}>← Back</Link>
        )}
        <Link className="navbar-brand navbar-brand-pixel brand-gradient position-absolute start-50 translate-middle-x" to="/" style={{ zIndex: 1090 }}>EchoAI</Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={open ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={toggle}
          style={{ zIndex: 1101 }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse navbar-collapse-bg${open ? ' show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink end className="nav-link" to="/" onClick={closeNavbar}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/chat" onClick={closeNavbar}>Chat</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={closeNavbar}>About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
;

export default Navbar;
