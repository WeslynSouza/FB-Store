const INITIAL_STATE = { camisa: {}, page: '' }

export default ( state = INITIAL_STATE, action ) => {    
    switch(action.type){

        case 'DETALHES':
            return { ...state, camisa: action.payload[0], page: action.payload[1] }

        default: 
            return state
    }
}