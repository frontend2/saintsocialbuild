import * as ActionTypes from './ActionTypes';
import * as moment from 'moment';

export const Captions = (state = {isLoading: true, errMess: null, captions:[]}, action) => {
    switch (action.type) {
      //FETCH CAPTIONS
      case ActionTypes.ADD_CAPTIONS:
            return {...state, isLoading: false, errMess: null, captions: action.payload};

      case ActionTypes.CAPTIONS_LOADING:
            return {...state, isLoading: true, errMess: null, captions: []}

      case ActionTypes.CAPTIONS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
      //FETCH CAPTIONS


      //ADD CAPTION
      case ActionTypes.ADD_CAPTION:
            var caption = action.payload;
            caption.id = state.captions.length;
            caption.ids = state.captions.length;
            caption.uid = state.captions.length;
            caption.status = 1;
            caption.changed = new moment().format("DD-MM-YYYY HH:mm:s");
            caption.created = new moment().format("DD-MM-YYYY HH:mm:s");
            console.log("Caption: ", caption);
            return {...state, isLoading: false, errMess: null,
                      captions: state.captions.concat(caption)};
      //ADD CAPTION

      //DELETE CAPTION
            case ActionTypes.DELETE_CAPTION:
            return {...state, isLoading: false, errMess: null, captions: [...state.captions.slice(0, action.payload),
              ...state.captions.slice(action.payload + 1)]};
      //DELETE CAPTION

      //EDIT CAPTION
            case ActionTypes.EDIT_CAPTION:
            const oldObj = state.captions[action.payload.captionId]
            const newObj = Object.assign({}, oldObj,
               {title: action.payload.title,
                 content: action.payload.content });
                 return {...state, isLoading: false, errMess: null,
                    captions: [  ...state.captions.slice(0, action.payload.captionId),
                         newObj, ...state.captions.slice(action.payload.captionId + 1)]};
      //EDIT CAPTION

        default:
          return state;
      }
};
