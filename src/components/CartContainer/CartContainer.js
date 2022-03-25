import React from 'react';
import './CartContainer.css'

const CartContainer = (props) => {
    // console.log(props)
    return (
        <div className='cart'>
            <img src={props.tv.img} alt="img"/>
            <div className='cart-info'>
                <h3>{props.tv.name}</h3>
                <h1>${props.tv.price}</h1>
                <button className='cart-btn'>Add to Choice List</button>
            </div>
        </div>
    );
};

export default CartContainer;