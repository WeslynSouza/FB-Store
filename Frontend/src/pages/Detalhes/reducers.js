const INITIAL_STATE = { camisa: { titulo: '', preço: '', imagem: {}, page: ''}, }

export default ( state = INITIAL_STATE, action ) => {    
    switch(action.type){

        case 'DETALHES':
            return { ...state, camisa: action.payload }

        case 'BUSCA_DETALHES':
            return { ...state, camisa: action.payload }

        default: 
            return state
    }
}