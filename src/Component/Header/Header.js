import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import logo from '../../images/ema-john-logo.png'
import './header.css'

const Header = () => {
    return (
        <div className='Header'>
            <img src={logo} alt="" />
            <nav>
                <Link to='/shop'>Shop</Link>
                <Link to="/order-review">Order Review</Link>
                <Link to="/manage-inventory">Manage Inventory here</Link>
            </nav>
        </div>
    );
};

export default Header;