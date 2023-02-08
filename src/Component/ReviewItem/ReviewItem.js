import React from 'react';

const ReviewItem = (props) => {
    const ReviewItemStyle = {
        borderBottom: "1px solid lightgray"
    }
    const { name, quantity, key, price } = props.product;
    return (
        <div style={ReviewItemStyle} className='product-details'>
            <h4>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>$ {price}</small></p>
            <button onClick={() => props.removeItem(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;