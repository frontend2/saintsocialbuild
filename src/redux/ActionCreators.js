import * as ActionTypes from './ActionTypes';

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
