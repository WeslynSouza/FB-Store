import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import ProdutoCaixa from '../../components/ProdutoCaixa';
import { getList } from './actions';

import './styles.css';

class BtsStore extends Component {

    UNSAFE_componentWillMount(){
        this.props.getList()
    }

    renderCamisas(){
        const list = this.props.list || []
        return list.map( camisa =>  (
            <ProdutoCaixa 
                key={camisa.titulo}
                img={camisa.imagem}
                alt='Camisa bts'
                title={camisa.titulo}
                value={`R$ ${camisa.preço}`}
                bg='var(--color-caixa-bts)'
                color='var(--color-menu-bts)'
            />)
        )
    }

    render(){
        return (
            <div>
                <Menu color='var(--color-menu-bts)'/>
                <div className='btsStore'>
                    <div className='products-container' >
                        {this.renderCamisas()}
                    </div>
                </div>
                <Rodape color='var(--color-rodape-bts)'/>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.btsStore.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BtsStore);