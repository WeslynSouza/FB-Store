import { combineReducers } from 'redux';

import BtsStoreReducer from './pages/Colecoes/BtsProdutos/reducer';
import MxStoreReducer from './pages/Colecoes/MxProdutos/reducer';
import BpStoreReducer from './pages/Colecoes/BpProdutos/reducer';
import DetailsReducer from './pages/Detalhes/reducers';

const rootReducer = combineReducers({
    btsStore: BtsStoreReducer,
    mxStore: MxStoreReducer,
    bpStore: BpStoreReducer,
    details: DetailsReducer,
})

export default rootReducer;