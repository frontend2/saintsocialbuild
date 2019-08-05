import * as ActionTypes from './ActionTypes';

export const addCaption = (title, content) => ({
    type: ActionTypes.ADD_CAPTION,
    payload: {
    title: title,
    content: content,
    }
});
