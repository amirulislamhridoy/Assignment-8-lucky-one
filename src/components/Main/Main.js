import React, { useEffect, useState } from 'react';
import CartContainer from '../CartContainer/CartContainer';
import './Main.css'

const Main = () => {
    const [tvs, setTvs] = useState([])
    useEffect( () => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setTvs(data))
    }, [])
    // console.log(tvs)
    return (
        <div className='main'>
            <div className='cart-container'>
                {
                    tvs.map(tv => <CartContainer tv={tv} key={tv.id}></CartContainer>)
                }
            </div>
            {/* <div className='cart-container'>container</div> */}
            <div className='cart-details'>details</div>
            
        </div>
    );
};

export default Main;