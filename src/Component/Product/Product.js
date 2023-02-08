import React from 'react';
import { Link } from 'react-router-dom';
import './product.css';

const Product = (props) => {
    const { name, key, img, seller, price, stock } = props.product;
    // console.log(key);
    return (
        <div key={key} className='single-product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h4><Link to={'/product/' + key}>{name}</Link></h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={() => {
                    props.CartClickHandler(props.product);
                }}>add to cart</button>
            </div>
        </div>
    );
};

export default Product;