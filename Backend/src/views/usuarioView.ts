import Usuario from '../models/usuario';

export default {
    render(usuario: Usuario){
        console.log(usuario.endereços)
        return {
            nome: usuario.nome,
            email: usuario.email,
            cel: usuario.cel,
            avatar: usuario.avatar,
        }
    },

    renderMany(usuarios: Usuario[]){
        return usuarios.map(usuario => this.render(usuario));
    }
}