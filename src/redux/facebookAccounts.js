import * as ActionTypes from './ActionTypes';

export const facebookAccounts = (state = {facebookAccountsLoading: true, facebookAccountsErrMess: null, facebookAccounts:[]}, action) => {
    switch (action.type) {
      //FETCH CAPTIONS
      case ActionTypes.ADD_FACEBOOK_ACCOUNTS:
            return {...state, facebookAccountsLoading: false, facebookAccountsErrMess: null, facebookAccounts: action.payload};

      case ActionTypes.FACEBOOK_ACCOUNTS_LOADING:
            return {...state, facebookAccountsLoading: true, facebookAccountsErrMess: null, facebookAccounts: []}

      case ActionTypes.FACEBOOK_ACCOUNTS_FAILED:
            return {...state, facebookAccountsLoading: false, facebookAccountsErrMess: action.payload};
      //FETCH CAPTIONS

        default:
          return state;
      }
};
