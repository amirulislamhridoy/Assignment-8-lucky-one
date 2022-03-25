import React, { useEffect, useState } from 'react';
import CartContainer from '../CartContainer/CartContainer';
import SelectedTV from '../CartContainer/SelectedTV/SelectedTV';
import './Main.css'

const Main = () => {
    const [tvs, setTvs] = useState([])
    useEffect( () => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setTvs(data))
    }, [])
    const [datas, setDatas] = useState([])
    const addCartDetail = (cartDetails) => {
        // console.log('yes', cartDetails)
        setDatas([...datas, cartDetails])
    }
    // console.log(datas)
    return (
        <div className='main'>
            <div className='cart-container'>
                {
                    tvs.map(tv => <CartContainer addCartDetail={addCartDetail} tv={tv} key={tv.id}></CartContainer>)
                }
            </div>
            <div className='cart-details'>
                <h1 className='cart-details-head'>Selected Smart TV</h1>
                <SelectedTV datas={datas}></SelectedTV>
            </div>
            
        </div>
    );
};

export default Main;