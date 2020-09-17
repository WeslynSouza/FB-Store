import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Menu from '../../../components/Menu';
import Rodape from '../../../components/Rodape';
import ProdutoCaixa from '../../../components/ProdutoCaixa';
import { getList } from './actions';
import { detalhes } from '../../Detalhes/actions';

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
                img={camisa.imagem[0]}
                alt='Camisa bts'
                title={camisa.titulo}
                value={`R$ ${camisa.preço}`}
                href='/Detalhes'
                hash={`btsStore/${camisa.titulo}`}
                click={() => this.props.detalhes(camisa, "btsStore")}
            />)
        )
    }

    render(){
        return (
            <div className='btsStore'>
                <Menu/>
                <div className='products-container' >
                    {this.renderCamisas()}
                </div>
                <Rodape/>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.btsStore.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, detalhes }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BtsStore);