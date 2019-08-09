import * as ActionTypes from './ActionTypes';
import { CAPTIONS } from '../models/general_captions';
import { FACEBOOK_ACCOUNTS } from '../models/facebook_accounts';
import { TWITTER_ACCOUNTS } from '../models/twitter_accounts';
import { INSTAGRAM_ACCOUNTS } from '../models/instagram_accounts';

//CAPTIONS ACTIONS CREATORS
export const fetchCaptions = () => (dispatch) => {
    dispatch(captionsLoading(true));
    setTimeout(() => {
        dispatch(addCaptions(CAPTIONS));
    }, 2000);
}

export const addCaptions = (captions) => ({
    type: ActionTypes.ADD_CAPTIONS,
    payload: captions
});

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

//CAPTIONS ACTIONS CREATORS

//FACEBOOK ACCOUNT ACTIONS CREATORS
export const fetchFacebookAccounts = () => (dispatch) => {
    dispatch(facebookAccountsLoading(true));
    setTimeout(() => {
        dispatch(addFacebookAccounts(FACEBOOK_ACCOUNTS));
    }, 2000);
}

export const addFacebookAccounts = (facebookAccounts) => ({
    type: ActionTypes.ADD_FACEBOOK_ACCOUNTS,
    payload: facebookAccounts
});

export const facebookAccountsLoading = () => ({
    type: ActionTypes.FACEBOOK_ACCOUNTS_LOADING
});

export const facebookAccountsFailed = (errmess) => ({
    type: ActionTypes.FACEBOOK_ACCOUNTS_FAILED,
    payload: errmess
});
//FACEBOOK ACCOUNTS ACTIONS CREATORS

//TWITTER ACCOUNT ACTIONS CREATORS
export const fetchTwitterAccounts = () => (dispatch) => {
    dispatch(twitterAccountsLoading(true));
    setTimeout(() => {
        dispatch(addTwitterAccounts(TWITTER_ACCOUNTS));
    }, 2000);
}

export const addTwitterAccounts = (twitterAccounts) => ({
    type: ActionTypes.ADD_TWITTER_ACCOUNTS,
    payload: twitterAccounts
});

export const twitterAccountsLoading = () => ({
    type: ActionTypes.TWITTER_ACCOUNTS_LOADING
});

export const twitterAccountsFailed = (errmess) => ({
    type: ActionTypes.TWITTER_ACCOUNTS_FAILED,
    payload: errmess
});
//TWITTER ACCOUNTS ACTIONS CREATORS

//INSTAGRAM ACCOUNT ACTIONS CREATORS
export const fetchInstagramAccounts = () => (dispatch) => {
    dispatch(instagramAccountsLoading(true));
    setTimeout(() => {
        dispatch(addInstagramAccounts(INSTAGRAM_ACCOUNTS));
    }, 2000);
}

export const addInstagramAccounts = (instagramAccounts) => ({
    type: ActionTypes.ADD_INSTAGRAM_ACCOUNTS,
    payload: instagramAccounts
});

export const instagramAccountsLoading = () => ({
    type: ActionTypes.INSTAGRAM_ACCOUNTS_LOADING
});

export const instagramAccountsFailed = (errmess) => ({
    type: ActionTypes.INSTAGRAM_ACCOUNTS_FAILED,
    payload: errmess
});
//INSTAGRAM ACCOUNTS ACTIONS CREATORS
