import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

import AuthNav from './auth-nav';

const loggedIn = () => {
  return (
    <div
      className="nav-bar"
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '100%',
      }}
    >
      <Link to="/" style={{ color: '#E2F0F7', padding: '0 1rem' }}>
        Home
      </Link>
      <Link to="/graphs" style={{ color: '#E2F0F7', padding: '0 1rem' }}>
        Graphs
      </Link>
      <Link to="/profile" style={{ color: '#E2F0F7', padding: '0 1rem' }}>
        Profile
      </Link>
      <AuthNav />
    </div>
  );
};

const loggedOut = () => {
  return (
    <div
      className="nav-bar"
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '100%',
      }}
    >
      <Link to="/" style={{ color: '#E2F0F7', padding: '0 1rem' }}>
        Home
      </Link>
      <Link to="/graphs" style={{ color: '#E2F0F7', padding: '0 1rem' }}>
        Graphs
      </Link>
      <AuthNav />
    </div>
  );
};

const NavTypeVisible = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? loggedIn() : loggedOut();
};

export default NavTypeVisible;
