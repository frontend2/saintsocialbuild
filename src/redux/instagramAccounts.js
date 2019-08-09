import * as ActionTypes from './ActionTypes';

export const instagramAccounts = (state = {isLoading: true, errMess: null, instagramAccounts:[]}, action) => {
    switch (action.type) {
      //FETCH CAPTIONS
      case ActionTypes.ADD_INSTAGRAM_ACCOUNTS:
            return {...state, isLoading: false, errMess: null, instagramAccounts: action.payload};

      case ActionTypes.INSTAGRAM_ACCOUNTS_LOADING:
            return {...state, isLoading: true, errMess: null, instagramAccounts: []}

      case ActionTypes.INSTAGRAM_ACCOUNTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
      //FETCH CAPTIONS

        default:
          return state;
      }
};
