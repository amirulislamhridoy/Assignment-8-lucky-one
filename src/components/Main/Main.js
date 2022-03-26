import React, { useEffect, useState } from 'react';
import CartContainer from '../CartContainer/CartContainer';
import SelectedTV from '../CartContainer/SelectedTV/SelectedTV';
import './Main.css'

const Main = () => {
    const [tvs, setTvs] = useState([])
    const [datas, setDatas] = useState([])
    useEffect( () => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setTvs(data))
    }, [])

    const addCartDetail = (cartDetails) => {
        const a = datas.find(data => data.id === cartDetails.id)
        if(datas.length === 4){
            alert('You can choose 4 items.')
        }else if(a){
            alert('You are already added.')
        }
        else{
            setDatas([...datas, cartDetails])
        }
    }
    const deleteFunction = (id) => {
        const rest = datas.filter(data => data.id !== id)
        setDatas(rest)
    }

    const [choose, setChoose] = useState([])
    // console.log(choose)
    const chooseOne = () => {
        const randomDigit = Math.ceil(Math.random() * 10)
        const match = datas.find(data => data.id == randomDigit) 
        if(match){
            setChoose([match])
        }else{
            setChoose([datas[0]])
        }
    }
    return (
        <div className='main'>
            <div className='cart-container'>
                {
                    tvs.map(tv => <CartContainer addCartDetail={addCartDetail} tv={tv} key={tv.id}></CartContainer>)
                }
            </div>
            <div className='cart-details'>
                <h1 className='cart-details-head'>Selected Smart TV</h1>
                <SelectedTV choose={choose} chooseOne={chooseOne} datas={datas} deleteFunction={deleteFunction}></SelectedTV>
            </div>
            
        </div>
    );
};

export default Main;