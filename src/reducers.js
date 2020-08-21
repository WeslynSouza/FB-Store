import { combineReducers } from 'redux';

import BtsStoreReducer from './pages/BtsStore/reducer';
import MxStoreReducer from './pages/MxStore/reducers';
import BpStoreReducer from './pages/BpStore/reducer';
import DetailsReducer from './pages/Details/reducers';

const rootReducer = combineReducers({
    btsStore: BtsStoreReducer,
    mxStore: MxStoreReducer,
    bpStore: BpStoreReducer,
    details: DetailsReducer,
})

export default rootReducer;