import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Choose1Modal from '../../Chose1Modal/Choose1Modal';
import './SelectedTV.css'

const SelectedTV = (props) => {
    // console.log(props)
    
    return (
        <div className='selected-tv'>
            {
            props.datas.map(data => <div className='selected-tv-details' key={data.id}>
                    <div className='selected-img-name'>
                        <img src={data.img} alt="" />
                        <h3>{data.name.split(' ')[0]}</h3>
                    </div>
                    <div onClick={() => props.deleteFunction(data.id)} className='delete-btn'>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </div>
                </div>)
            }
            {/* <button onClick={() => props.chooseOne()} className="choose-one-for">CHOOSE 1 FOR ME</button> */}
            <Choose1Modal choose={props.choose} chooseOne={props.chooseOne}></Choose1Modal>
        </div>
    );
};

export default SelectedTV;