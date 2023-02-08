import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import './productDetails.css'


const ProductDetails = () => {
    const { ProductKey } = useParams();
    // console.log(useParams());
    const product = fakeData.find(product => product.key === ProductKey);
    const { name, price, stock, seller, features, img, } = product;
    console.log(features);
    return (
        <div className='single-product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h4>{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                {features.length > 0 && <h3>Features:</h3>}
                {features.map(feature => <li>{feature.description}: {feature.value}</li>)
                }
            </div>
        </div>
    );
};

export default ProductDetails;