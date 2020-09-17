import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import Slide from '../../components/Slide';
import SlideItem from '../../components/slideItem';
import { montaPagina } from './actions';

import './styles.css';

class Details extends Component {

    UNSAFE_componentWillMount(){

        const [colecao, titulo] =  this.props.location.hash.split('/');

        if(!this.props.camisa.page){
            this.props.montaPagina(colecao.split('#')[1], titulo)
        } 
    }

    imageOuSlide(){
        let imagem =  this.props.camisa.imagem || [];
        if(!this.props.camisa.imagem === []){
            return (
                <img src={imagem[0]} alt='imagem detalhes'/>
            )
        }else{
            return(
                <Slide>
                    <SlideItem img={imagem[0]} ativo/>
                    <SlideItem img={imagem[1]} />
                </Slide>
            )
        }
    }

    render() {

        return (
            <div className='camisa-detalhes' style={{background: this.bg}} >
                <Menu color={this.menu}/>
                    <div className='camisa-detalhes-container'>
                        
                    {this.imageOuSlide()}
                    
                    <div className='camisa-detalhes-box' style={{background: this.caixa}}>
                        
                        <h1 className='camisa-titulo'>{this.props.camisa.titulo}</h1>
                        <h2 className='camisa-preco'>{this.props.camisa.preço}</h2>

                        <h3 className='detalhes-titulo'>Detalhes</h3>

                        <div className="camisa-infos">
                            <select name="tamanho" id="tamanho">
                                <option value="">Tamanho</option>
                                <option value="pp">PP</option>
                                <option value="p">P</option>
                                <option value="m">M</option>
                                <option value="p">G</option>
                                <option value="p">GG</option>
                            </select>

                            <select name="quantidade" id="quantidade">
                                <option value="">Quantidade</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>

                            <select name="cor" id="cor">
                                <option value="">Cor</option>
                                <option value="branco">Branco</option>
                                <option value="preto">Preto</option>
                            </select>
                        </div>

                    </div>

                    <button className='camisa-detalhes-button'>
                        comprar
                    </button>
                    </div>
                <Rodape color={this.rodape}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({ camisa: state.details.camisa, page: state.details.page })
const mapDispatchToProps = dispatch => bindActionCreators({ montaPagina }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Details);