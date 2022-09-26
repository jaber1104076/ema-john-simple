import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    //console.log(props.addToCart)
    const { name, seller, price, img, ratings } = props.product;
    // console.log(props.product)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <p className='name'> Product name:  {name} </p>
                <p><small>Price : ${price}</small></p>
                <p>Manufectured : {seller}</p>
                <p>Ratings {ratings} stars</p>
            </div>
            <button onClick={() => props.addToCart(props.product)} className='button-cart'>
                <p className='btn-text'>Order Summery</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;