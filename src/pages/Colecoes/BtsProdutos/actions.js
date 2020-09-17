import dadosIniciais from '../../../data/dados_iniciais.json';

export function getList() {
    const request = dadosIniciais.coleções[0].camisas;
    return {
        type: 'BTSSTORE_FETCHED',
        payload: request
    }
}