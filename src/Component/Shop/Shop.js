import React from 'react';
import Product from '../Product/Product.js';
import Cart from '../Cart/Cart.js';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css'
import { addToDb, getFromDb } from '../../utilities/fakedb.js';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
    const products = fakeData.slice(0, 10);
    const [order, setOrder] = useState([]);
    useEffect(() => {
        const savedCart = getFromDb();
        const orderKeys = Object.keys(savedCart);
        const orderedProducts = orderKeys.map(key => {
            const orderProduct = fakeData.find(pd => pd.key === key);
            orderProduct.quantity = savedCart[key];
            // console.log(getFromDb()[key])
            return orderProduct;
        })
        setOrder(orderedProducts);
        // console.log(getFromDb());
    }, [])

    const orderHandler = (OrderProduct) => {
        let newOrder;
        const orderedProduct = order.find(product => product.key === OrderProduct.key);
        if (orderedProduct) {
            OrderProduct.quantity = OrderProduct.quantity + 1;
            const other = order.filter(product => product.key !== OrderProduct.key);
            newOrder = [...other, OrderProduct];
        }
        else {
            OrderProduct.quantity = 1;
            newOrder = [...order, OrderProduct];
        }
        setOrder(newOrder);
        addToDb(OrderProduct.key);
    };
    return (
        <div className='Body'>
            <div className='Product-portion'>
                {
                    products.map(product =>
                        <Product key={product.key} product={product} CartClickHandler={orderHandler} ></Product>
                    )
                }
            </div>
            <div className='cart-portion'>
                <Cart orderProduct={order}>
                    <Link to='/order-review'><button>Order Review</button></Link>
                </Cart>
            </div>
        </div>
    );
};
export default Shop;