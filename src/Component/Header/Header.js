import React from 'react';
import logo from '../../images/ema-john-logo.png'
import './header.css'

const Header = () => {
    return (
        <div className='Header'>
            <img src={logo} alt="" />
            <nav>
                <a href="#Shop">Shop</a>
                <a href="Order-review">Order Review</a>
                <a href="Manage-inventory">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Header;