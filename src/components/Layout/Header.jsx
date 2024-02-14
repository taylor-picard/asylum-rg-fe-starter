import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import AuthNav from '../auth-nav';

const { primary_accent_color } = colors;

function HeaderContent() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '3%',
        width: '100%',
        backgroundColor: primary_accent_color,
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div
        className="nav-bar"
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '20%',
        }}
      >
        <Link to="/" style={{ color: '#E2F0F7' }}>
          Home
        </Link>
        <Link to="/graphs" style={{ color: '#E2F0F7' }}>
          Graphs
        </Link>
        <Link to="/profile">Profile</Link>
        <AuthNav />
      </div>
    </div>
  );
}

export { HeaderContent };
