import ReactDOM from 'react-dom'
import React from 'react';
import './CartContainer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCoffee } from '@fortawesome/free-solid-svg-icons';

const CartContainer = (props) => {
    // console.log(props)
    return (
        <div className='cart'>
            <img src={props.tv.img} alt="img"/>
            <div className='cart-info'>
                <h3>{props.tv.name}</h3>
                <h1>${props.tv.price}</h1>
                <button className='cart-btn'>
                    Add to Choice List
                    <FontAwesomeIcon className='icon' icon={faCartShopping} spin></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default CartContainer;