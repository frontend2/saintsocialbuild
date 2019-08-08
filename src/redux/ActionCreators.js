import * as ActionTypes from './ActionTypes';
import { CAPTIONS } from '../models/general_captions';



export const fetchCaptions = () => (dispatch) => {
    dispatch(captionsLoading(true));
    setTimeout(() => {
        dispatch(addCaptions(CAPTIONS));
    }, 2000);
}

//FETCH IMPLEMENTATION
// export const fetchCaptions = () => (dispatch) => {
//     dispatch(captionsLoading());
//     return fetch()
//     .then(response => response.json())
//     .then(captions => {
//       console.log(captions)
//       dispatch(addCaptions(captions))});
// }



export const addCaption = (title, content) => ({
    type: ActionTypes.ADD_CAPTION,
    payload: {
    title: title,
    content: content,
    }
});

export const deleteCaption = (captionId) => ({
    type: ActionTypes.DELETE_CAPTION,
    payload : captionId
  });

export const editCaption = (captionId, values) => ({
      type: ActionTypes.EDIT_CAPTION,
      payload:{
        title: values.captionTitle,
        content: values.captionContent,
        captionId : captionId,
      }
    });

export const captionsLoading = () => ({
    type: ActionTypes.CAPTIONS_LOADING
});

export const captionsFailed = (errmess) => ({
    type: ActionTypes.CAPTIONS_FAILED,
    payload: errmess
});

export const addCaptions = (captions) => ({
    type: ActionTypes.ADD_CAPTIONS,
    payload: captions
});
