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
                        <h3>{data.name.slice(0, 10)}</h3>
                    </div>
                    <div className='delete-btn'>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </div>
                </div>)
            }
        </div>
    );
};

export default SelectedTV;