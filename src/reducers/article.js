import {actionTypes} from "../actions/article";

const defaultState = {
    content: '',
    loading: false,
    loaded: false
};

const article = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ARTICLE_START:
            return {...state, loading: true};
        case actionTypes.FETCH_ARTICLE_SUCCESS:
            return {...state, ...action.article, loading: false, loaded: true};
        case actionTypes.FETCH_ARTICLE_FAIL:
            return {...state, loading: false, error: 'Failed to fetch article'};
    }
    return state;
};

export default article;