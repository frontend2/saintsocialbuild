import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Captions } from './captions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            captions: Captions
        }), applyMiddleware(thunk, logger)
    );
    return store;
}
