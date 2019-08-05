import {createStore, combineReducers} from 'redux';
import { Reducer, initialState } from './reducer';
import { Captions } from './captions';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            captions: Captions
        })
    );

    return store;
}
