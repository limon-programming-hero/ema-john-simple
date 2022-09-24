import React from 'react';
import Product from '../Product/Product.js';
import Cart from '../Cart/Cart.js';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css'

const Shop = () => {
    const products = fakeData.slice(0, 10);
    let [order, setOrder] = useState([]);
    const orderHandler = (OrderProduct) => {
        const newOrder = [...order, OrderProduct]
        setOrder(newOrder);
    };
    console.log(order)
    return (
        <div className='Body'>
            <div className='Product-portion'>
                {
                    products.map(product =>
                        <Product product={product} CartClickHandler={orderHandler} ></Product>
                    )
                }
            </div>
            <div className='cart-portion'>
                <Cart orderProduct= {order}></Cart>
            </div>
        </div>
    );
};
export default Shop;