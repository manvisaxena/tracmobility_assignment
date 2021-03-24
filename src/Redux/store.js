import {applyMiddleware, createStore} from 'redux';
import rootReducer from './Reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));