import {combineReducers} from 'redux';
import {createStore} from 'redux';
import { BaiTapGameOanTuTiReducer } from './BaiTapGameOanTuTiReducer';
import { BaiTapBookingTicketReducer } from './BaiTapBookingTicketReducer';

export const rootReducer = combineReducers({
    BaiTapGameOanTuTiReducer,
    BaiTapBookingTicketReducer,
})



export const store = createStore (rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );