import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import ProdutoCaixa from '../../components/ProdutoCaixa';
import { getList } from './actions';

import './styles.css';

class MxStore extends Component {

    UNSAFE_componentWillMount(){
        this.props.getList()
    }

    renderCamisas(){
        const list = this.props.list || []
        return list.map( camisa =>  (
            <ProdutoCaixa 
                key={camisa.titulo}
                img={camisa.imagem}
                alt='Camisa Monsta X'
                title={camisa.titulo}
                value={`R$ ${camisa.preço}`}
                bg='var(--color-caixa-mx1)'
                color='var(--color-fonte-mx1)'
                href='/Detalhes'
            />)
        )
    }

    render(){
        return (
            <div>
                <Menu color='var(--color-menu-mx1)'/>
                <div className='mxStore'>
                    <div className='products-container'>
                        {this.renderCamisas()}
                    </div>
                </div>
                <Rodape color='var(--color-rodape-mx1)'/>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.mxStore.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MxStore);