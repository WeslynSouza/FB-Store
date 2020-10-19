import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default props => {

    return  (
        <div className='box'>
            <img src={props.img} alt={props.alt}/>
            <div className='box-detalhes'>
                <h1>{props.title}</h1>
                <h2>{props.value}</h2>
                <Link to={{ pathname: props.href, hash: props.hash}} onClick={props.click}>
                    Detalhes
                </Link>
            </div>
        </div>
    )
}