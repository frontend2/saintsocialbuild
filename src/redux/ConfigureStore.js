import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Captions } from './captions';
import { facebookAccounts } from './facebookAccounts';
import { twitterAccounts } from './twitterAccounts';
import { instagramAccounts } from './instagramAccounts';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            captions: Captions,
            facebookAccounts: facebookAccounts,
            twitterAccounts: twitterAccounts,
            instagramAccounts: instagramAccounts,
        }), applyMiddleware(thunk, logger)
    );
    return store;
}
