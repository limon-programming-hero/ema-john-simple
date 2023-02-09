import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import logo from '../../images/ema-john-logo.png'
import './header.css'
import { useContext } from 'react';
import { userContext } from './../../App';

const Header = () => {
    const [userLogin, setUserLogin] = useContext(userContext);
    const signOutHandler = () => {
        setUserLogin({ name: '', email: '' });
    }
    return (
        <div className='Header'>
            <img src={logo} alt="" />
            <nav>
                <Link to='/shop'>Shop</Link>
                <Link to="/order-review">Order Review</Link>
                <Link to="/manage-inventory">Manage Inventory here</Link>
                <button className='Header-button' onClick={signOutHandler}>Sign Out</button>
            </nav>
        </div>
    );
};

export default Header;