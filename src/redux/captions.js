import { CAPTIONS } from '../models/general_captions';
import * as ActionTypes from './ActionTypes';
import * as moment from 'moment';

export const Captions = (state = CAPTIONS, action) => {
    switch (action.type) {

      case ActionTypes.ADD_CAPTION:
            var caption = action.payload;
            caption.id = state.length;
            caption.ids = state.length;
            caption.uid = state.length;
            caption.status = 1;
            caption.changed = new moment().format("DD-MM-YYYY HH:mm:s");
            caption.created = new moment().format("DD-MM-YYYY HH:mm:s");
            console.log("Caption: ", caption);
            return state.concat(caption);

            case ActionTypes.DELETE_CAPTION:
            return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];

            case ActionTypes.EDIT_CAPTION:
            const obj = state[action.payload];
          
            console.log(obj)
            return

        default:
          return state;
      }
};
