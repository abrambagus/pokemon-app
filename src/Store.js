import {createStore} from 'redux';
import RootReducer from './Reducer/RootReducer';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import {applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';

const Store = createStore(RootReducer);


export default Store;