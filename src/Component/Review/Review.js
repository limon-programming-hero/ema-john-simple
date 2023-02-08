import React from 'react';
import { useEffect, useContext } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import { deleteShoppingCart, getFromDb, removeFromDb } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from './../Cart/Cart';
import placeImage from '../../images/giphy.gif'
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from './../../App';

const Review = () => {
    console.log(fakeData);
    const [userLogin, setUserLogin] = useContext(userContext);
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    // const HandlerShipment = () => {
    //     const navigate = useNavigate();
    //     if (!userLogin.email) {
    //         navigate('/login')
    //     }
    // }
    const removeItem = (productKey) => {
        // console.log('removing item', productKey);
        removeFromDb(productKey);
        const newItem = cart.filter(product => product.key !== productKey);
        setCart(newItem);
    }
    useEffect(() => {
        const saveKeys = Object.keys(getFromDb());
        const CartProducts = saveKeys.map(key => {
            const cartProduct = fakeData.find(product => product.key === key);
            cartProduct.quantity = getFromDb()[key];
            return cartProduct;
        })
        setCart(CartProducts)
    }, [])

    let showOrderPlaceImage;
    if (orderPlaced) {
        showOrderPlaceImage = <img src={placeImage} alt="" srcset="" />
    }
    return (
        <div className='Body'>
            <div className='Product-portion'>
                <h3>Cart item : {cart.length}</h3>
                {cart.map(pd => <ReviewItem removeItem={removeItem} key={pd.key} product={pd}></ReviewItem>)}
                {showOrderPlaceImage}
            </div>
            <div className='cart-portion'>
                <Cart orderProduct={cart}>
                    <Link to='/Shipment'><button >Place Shipment</button></Link>
                </Cart>
            </div>
        </div >
    );
};

export default Review;