import Produto from '../models/produto';
import ImagemView from './imagemView';

export default {
    render(produto: Produto){
        return {
            id: produto.id,
            titulo: produto.nome,
            preço: produto.preço,
            tipo: produto.tipo,
            marca: produto.categoria.nome,
            imagens: ImagemView.renderMany(produto.imagens)
        }
    },

    renderMany(produtos: Produto[]){
        return produtos.map(produto => this.render(produto));
    }
}