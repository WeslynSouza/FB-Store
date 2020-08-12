import React from 'react';

import './styles.css';

export default props => {
    return (
        <footer style={{backgroundColor: props.color}}>
            <h1>fantastic baby store</h1>

            <p>A Fantastic Baby Store é uma loja de moda com foco em artigos de K-Pop, Geek e cultura pop no geral.</p>

            <p>email@email.com<br/>(11)XXXX-XXXX</p>

            <h3>Soft Systems &copy; 2020</h3>
        </footer>
    )
}