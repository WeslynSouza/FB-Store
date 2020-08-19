import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default props => {
    return (
        <div className='colecao-container'>
            <Link to={props.href}>
                <img src={props.img} alt={props.alt}/>
            </Link>
            <div className='colecao-container-detalhes'>
                <h1>{props.titulo}</h1>
                <Link to={props.href} style={{backgroundColor: props.color}}>
                    Conferir coleção
                </Link>
            </div>
        </div>
    )
}