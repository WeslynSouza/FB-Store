import Endereco from '../models/endereco';

export default {
    render(endereço: Endereco){
        return {
            id: endereço.id,
            estado: endereço.estado,
            cidade: endereço.cidade,
            cep: endereço.cep,
            rua: endereço.rua,
            numero: endereço.numero,
            complemento: endereço.complemento
        }
    },

    renderMany(endereços: Endereco[]) {
        return endereços.map(endereço => this.render(endereço));
    }
}