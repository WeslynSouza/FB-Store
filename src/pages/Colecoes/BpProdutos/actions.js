import dadosIniciais from '../../../data/dados_iniciais.json';

export function getList() {
    const request = dadosIniciais.coleções[2].camisas;
    return {
        type: 'BPSTORE_FETCHED',
        payload: request
    }
}