import React from 'react';
import Product from '../Product/Product';
import fakeData from '../fakeData';
import { useState } from 'react';
import './Shop.css'

const Body = () => {
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
                <h3>Order Summary</h3>
                <p>Items ordered: {order.length}</p>
                {/* <p><small></small></p>
                <p><small></small></p>
                <p><small></small></p>
                <p><small></small></p> */}
            </div>
        </div>
    );
};
export default Body;