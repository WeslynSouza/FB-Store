import React from 'react';

import './styles.css';

export default props => {
    return  (
        <div className='box'>
            <img src={props.img} alt={props.alt}/>
            <div className='box-detalhes'>
                <h1>{props.title}</h1>
                <h2>{props.value}</h2>
                <button>
                    Detalhes
                </button>
            </div>
        </div>
    )
}