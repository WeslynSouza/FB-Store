import Categoria from '../models/categoria';

const url = `http://localhost:3333/uploads/`;

export default {
    render(categoria: Categoria){
        return {
            id: categoria.id,
            nome: categoria.nome,
            logo: `${url}${categoria.logoUrl}`,
            banner: `${url}${categoria.bannerUrl}`,
        }
    },

    renderMany(categorias: Categoria[]){
        return categorias.map(categoria => this.render(categoria));
    }
}