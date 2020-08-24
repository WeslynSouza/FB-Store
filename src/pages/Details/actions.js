import DaoFactory from '../../util/DaoFactory';

export function detalhes(camisa, page){

    camisa = { ...camisa, page: page}

    DaoFactory.getDetailsDao()
    .then(dao => dao.adiciona(camisa))
    .catch(err => console.log(err));

    return {
        type: 'DETALHES',
        payload: camisa
    }

}

export function buscaDetalhes(){
    
    return {
        type: 'BUSCA_DETALHES',
        payload: _busca(0)
    }

}

function _busca(indice = false) {

    let camisaLista = []

    return DaoFactory.getDetailsDao()
    .then(dao => dao.busca())
    .then(camisas => 
        camisas.map(camisa => {
            console.log(camisa)
            camisaLista.push(camisa)
            return true}))
    .then(resp => {return indice ? camisaLista : camisaLista[indice] })
    .catch(err => console.log(err));
}