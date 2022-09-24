import React from 'react';
import './product.css'

const Product = (props) => {
    const product = props.product;
    return (
        <div>
            <div key={product.key} className='single-product'>
                <div>
                    <img src={product.img} alt="" />
                </div>
                <div className='product-details'>
                    <h4>{product.name}</h4>
                    <br />
                    <p><small>by: {product.seller}</small></p>
                    <p>${product.price}</p>
                    <p><small>only {product.stock} left in stock - order soon</small></p>
                    <button onClick={() => {
                        props.CartClickHandler(product);
                    }}>add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;