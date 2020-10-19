import dadosIniciais from '../../data/dados_iniciais.json';

export async function getList(indice = 0) {

    const request = dadosIniciais.coleções[indice].camisas;
    return {
        type: 'BUSCAR_CAMISAS',
        payload: request
    }

}