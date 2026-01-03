import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Header(props) {
  const { branding } = props;

  const headerStyle = {
    background: 'linear-gradient(135deg, #1e3a8a 0%, #1e293b 100%)',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '0',
    marginBottom: '2rem'
  };

  const brandStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    letterSpacing: '-0.025em',
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  };

  const navLinkStyle = {
    color: 'rgba(255, 255, 255, 0.9)',
    textDecoration: 'none',
    padding: '1rem 1.25rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.9375rem',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    borderBottom: '3px solid transparent'
  };

  return (
    <nav style={headerStyle}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0' }}>
        <Link to="/" style={brandStyle}>
          <i className="fas fa-address-book" style={{ fontSize: '1.75rem', color: '#3b82f6' }}></i>
          {branding}
        </Link>
        <div>
          <ul className="navbar-nav" style={{ display: 'flex', flexDirection: 'row', listStyle: 'none', margin: 0, padding: 0 }}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                style={navLinkStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderBottomColor = '#3b82f6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderBottomColor = 'transparent';
                }}
              >
                <i className="fas fa-home" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact/add"
                className="nav-link"
                style={navLinkStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderBottomColor = '#3b82f6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderBottomColor = 'transparent';
                }}
              >
                <i className="fas fa-plus" />
                Add Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link"
                style={navLinkStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderBottomColor = '#3b82f6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderBottomColor = 'transparent';
                }}
              >
                <i className="fas fa-info-circle" />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
