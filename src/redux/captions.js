import { CAPTIONS } from '../models/general_captions';
import * as ActionTypes from './ActionTypes';

export const Captions = (state = CAPTIONS, action) => {
    switch (action.type) {
      case ActionTypes.ADD_CAPTION:
            var caption = action.payload;
            caption.id = state.length;
            caption.ids = state.length;
            caption.uid = state.length;
            caption.status = 1;
            caption.changed = new Date().toISOString();
            caption.created = new Date().toISOString();
            console.log("Comment: ", caption);
            return state.concat(caption);
        default:
          return state;
      }
};
