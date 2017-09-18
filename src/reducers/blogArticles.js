import {actionTypes} from '../actions/articles';

const defaultState = {
    articles: [],
    fetchingPending: false,
    error: false
};

const blogArticlesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ARTICLES_START: {
            return {...state, fetchingPending: true};
        }
        case actionTypes.FETCH_ARTICLES_SUCCESS: {
            return {...state, fetchingPending: false, articles: action.articles};
        }
        case actionTypes.FETCH_ARTICLES_FAIL: {
            return {...state, fetchingPending: false, articles: [], error: action.error};
        }
        default: {
            return state;
        }

    }
};


export default blogArticlesReducer;