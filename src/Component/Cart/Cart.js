import React from 'react';
import "./cart.css"

const Cart = (props) => {
    const ordered = props.orderProduct;
    // console.log(ordered);
    let Price = 0;

    ordered.map(order => Price = Price + order.price * order.quantity);
    const priceFriction = (price) => {
        let number = price.toFixed(2);
        number = parseFloat(number);
        return number;
    }
    const tax = Price / 10;
    return (
        <div className="cart">
            <h3 className='centre'>Order Summary</h3>
            <p className='centre'>Items ordered: {ordered.length}</p>
            <p><small>Items: {priceFriction(Price)}</small></p>
            <p><small>Total before tax: {priceFriction(tax)}</small></p>
            <h3>Order Total:{priceFriction(Price + tax)}</h3>
            {
               props.children
            }
        </div>
    );
};

export default Cart;