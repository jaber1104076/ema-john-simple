import React from 'react';
import './Cart.css';
const Cart = (props) => {
    return (
        <div className='cart'>
            <h2>This is cart</h2>
            <p>selected Product  : {props.cart.length}</p>
        </div>
    );
};

export default Cart;