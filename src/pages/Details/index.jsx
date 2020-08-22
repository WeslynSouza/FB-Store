import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import Slide from '../../components/Slide';
import SlideItem from '../../components/slideItem';

import './styles.css';

class Details extends Component {

    constructor(props){
        super(props);

        if(this.props.page === 'mxStore'){
            this.menu = 'var(--color-menu-mx1)';
            this.rodape = 'var(--color-rodape-mx1)';
            this.bg = 'var(--color-bg-mx1)';
            this.caixa = 'var(--color-caixa-mx1)';
        }else if(this.props.page === 'btsStore'){
            this.menu = 'var(--color-menu-bts)';
            this.rodape = 'var(--color-rodape-bts)';
            this.bg = 'var(--color-bg-preto)';
            this.caixa = 'var(--color-caixa-bts)';
        }else if(this.props.page === 'bpStore'){
            this.menu = 'var(--color-menu-bp)';
            this.rodape = 'var(--color-menu-bp)';
            this.bg = 'var(--color-bg-preto)';
            this.caixa = 'var(--color-caixa-bp)';
        }
    }

    imageOuSlide(){
        let imagem =  this.props.camisa.imagem || [];
        if(this.props.camisa.imagem.length === 1){
            return (
                <img src={imagem[0]}/>
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
            <div>
                <Menu color={this.menu}/>
                <div className='camisa-detalhes' style={{background: this.bg}}>
                    <div className='camisa-detalhes-container'>
                        
                        {this.imageOuSlide()}
                        
                        <div className='camisa-detalhes-box' style={{background: this.caixa}}>
                            
                            <div className='camisa-detalhes-info'>
                                <h1>{this.props.camisa.titulo}</h1>
                                <h1>{this.props.camisa.preço}</h1>
                            </div>

                            <div className='camisa-detalhes-cor'>
                                <h2>Escolha a cor da camisa:</h2>
                            </div>

                            <div className='camisa-detalhes-tamanho'>
                                <h2>Escolha o tamanho da camisa:</h2>
                            </div>

                        </div>

                        <button className='camisa-detalhes-button'>
                            comprar
                        </button>
                    </div>
                </div>
                <Rodape color={this.rodape}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({ camisa: state.details.camisa, page: state.details.page })
export default connect(mapStateToProps, null)(Details);