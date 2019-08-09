import * as ActionTypes from './ActionTypes';

export const twitterAccounts = (state = {isLoading: true, errMess: null, twitterAccounts:[]}, action) => {
    switch (action.type) {
      //FETCH CAPTIONS
      case ActionTypes.ADD_TWITTER_ACCOUNTS:
            return {...state, isLoading: false, errMess: null, twitterAccounts: action.payload};

      case ActionTypes.TWITTER_ACCOUNTS_LOADING:
            return {...state, isLoading: true, errMess: null, twitterAccounts: []}

      case ActionTypes.TWITTER_ACCOUNTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
      //FETCH CAPTIONS

        default:
          return state;
      }
};
