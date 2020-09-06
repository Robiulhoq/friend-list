import React from 'react';
import logo from '../../image/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='main-logo'>
            <img src={logo} alt=""/>
            <h6>Facebook</h6>
        </div>
    );
};

export default Header;