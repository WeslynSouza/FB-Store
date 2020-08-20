import React from 'react';

import './styles.css';

export default props => {
    return (
        <div className={`carousel-item ${props.ativo ? 'active' : ''}`}>
            <img src={props.img} alt={props.alt}/>
        </div>
    )
}