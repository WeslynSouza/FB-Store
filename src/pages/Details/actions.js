
export function detalhes(camisa, page){

    return {
        type: 'DETALHES',
        payload: [camisa, page]
    }
}