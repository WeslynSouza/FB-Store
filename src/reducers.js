import { combineReducers } from 'redux';

import ProdutosReducer from './pages/Produtos/reducer';
import DetailsReducer from './pages/Detalhes/reducers';

const rootReducer = combineReducers({
    produtos: ProdutosReducer,
    details: DetailsReducer,
})

export default rootReducer;