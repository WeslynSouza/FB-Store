import dadosIniciais from '../../data/dados_iniciais.json';

export function montaPagina(colecao, titulo){

    let index = 0

    if(colecao === 'btsStore'){
        index = 0
    }else if(colecao === 'mxStore'){
        index = 1
    }else if(colecao === 'bpStore'){
        index = 2
    }

    const indexCamisa = dadosIniciais.coleções[index].camisas.findIndex(element => element.titulo === titulo)
    let camisa = dadosIniciais.coleções[index].camisas[indexCamisa]
    camisa = { ...camisa, page: colecao }

    return {
        type: 'BUSCA_DETALHES',
        payload: camisa
    }
}

export function detalhes(camisa, page){

    camisa = { ...camisa, page: page}

    return {
        type: 'DETALHES',
        payload: camisa
    }

}
