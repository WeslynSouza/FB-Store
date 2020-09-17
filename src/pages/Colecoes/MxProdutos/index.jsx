import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Menu from '../../../components/Menu';
import Rodape from '../../../components/Rodape';
import ProdutoCaixa from '../../../components/ProdutoCaixa';
import { getList } from './actions';
import { detalhes } from '../../Detalhes/actions';

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
                img={camisa.imagem[0]}
                alt='Camisa Monsta X'
                title={camisa.titulo}
                value={`R$ ${camisa.preço}`}
                href='/Detalhes'
                hash={`mxStore/${camisa.titulo}`}
                click={() => this.props.detalhes(camisa, "mxStore")}
            />)
        )
    }

    render(){
        return (
            <div className='mxStore'>
                <Menu/>
                <div className='products-container'>
                    {this.renderCamisas()}
                </div>
                <Rodape/>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.mxStore.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, detalhes }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MxStore);