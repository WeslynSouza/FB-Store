import dadosIniciais from '../../data/dados_iniciais.json';

export function getList() {
    const request = dadosIniciais.coleções[1].camisas;
    return {
        type: 'MXSTORE_FETCHED',
        payload: request
    }
}