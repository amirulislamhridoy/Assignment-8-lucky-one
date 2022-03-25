import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
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
        </div>
    );
};

export default SelectedTV;