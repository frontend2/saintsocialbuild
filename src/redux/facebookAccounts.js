import * as ActionTypes from './ActionTypes';

export const facebookAccounts = (state = {isLoading: true, errMess: null, facebookAccounts:[]}, action) => {
    switch (action.type) {
      //FETCH CAPTIONS
      case ActionTypes.ADD_FACEBOOK_ACCOUNTS:
            return {...state, isLoading: false, errMess: null, facebookAccounts: action.payload};

      case ActionTypes.FACEBOOK_ACCOUNTS_LOADING:
            return {...state, isLoading: true, errMess: null, facebookAccounts: []}

      case ActionTypes.FACEBOOK_ACCOUNTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
      //FETCH CAPTIONS

        default:
          return state;
      }
};
