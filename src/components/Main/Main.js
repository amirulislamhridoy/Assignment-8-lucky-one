import React, { useEffect, useState } from 'react';
import CartContainer from '../CartContainer/CartContainer';
import SelectedTV from '../CartContainer/SelectedTV/SelectedTV';
import { getLocalStorage, setLocalSTorage, removeLocalStorage, clearLocalStorage } from '../LocalStorage/LocalStorage';
import './Main.css'

const Main = () => {
    const [tvs, setTvs] = useState([])
    const [datas, setDatas] = useState([])
    useEffect( () => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setTvs(data))
    }, [])
    const deleteFunction = (id) => {
        const rest = datas.filter(data => data.id !== id)
        const match = datas.find(data => data.id === id)
        // console.log(rest)
        removeLocalStorage(match.id)
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
    const chooseAgain = () => {
        setDatas([])
        clearLocalStorage()
    }
    const addCartDetail = (cartDetails) => {
        const a = datas.find(data => data.id === cartDetails.id)
        if(datas.length === 4){
            alert('You can choose 4 TV.')
        }else if(a){
            alert('You are already added.')
        }
        else{
            setDatas([...datas, cartDetails])
            setLocalSTorage(cartDetails)
        }
    }
    useEffect(() => {
        const shopping = getLocalStorage()
        let matchElement = []
        for(const id in shopping){
        const check = tvs.find(tv => tv.id === id)
        if(check){
            matchElement.push(check)
        }
    }
    setDatas(matchElement)
    }, [tvs])

    return (
        <div className='main'>
            <div className='cart-container'>
                {
                    tvs.map(tv => <CartContainer addCartDetail={addCartDetail} tv={tv} key={tv.id}></CartContainer>)
                }
            </div>
            <div className='cart-details-parent'>
                <div className='cart-details'>
                    <h1 className='cart-details-head'>Selected Smart TV</h1>
                    <SelectedTV choose={choose} chooseOne={chooseOne} datas={datas} deleteFunction={deleteFunction} chooseAgain={chooseAgain}></SelectedTV>
                </div>
            </div>
            
        </div>
    );
};

export default Main;