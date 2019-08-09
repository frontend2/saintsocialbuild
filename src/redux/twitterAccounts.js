import * as ActionTypes from './ActionTypes';

export const twitterAccounts = (state = {isLoading: true, twitterAccountsErrMess: null, twitterAccounts:[]}, action) => {
    switch (action.type) {
      //FETCH CAPTIONS
      case ActionTypes.ADD_TWITTER_ACCOUNTS:
            return {...state, twitterAccountsLoading: false, twitterAccountsErrMess: null, twitterAccounts: action.payload};

      case ActionTypes.TWITTER_ACCOUNTS_LOADING:
            return {...state, twitterAccountsLoading: true, twitterAccountsErrMess: null, twitterAccounts: []}

      case ActionTypes.TWITTER_ACCOUNTS_FAILED:
            return {...state, twitterAccountsLoading: false, twitterAccountsErrMess: action.payload};
      //FETCH CAPTIONS

        default:
          return state;
      }
};
