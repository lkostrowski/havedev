import fetch from 'isomorphic-fetch';

const actionTypes = {
    FETCH_ARTICLES_START: 'FETCH_ARTICLES_START',
    FETCH_ARTICLES_SUCCESS: 'FETCH_ARTICLES_SUCCESS',
    FETCH_ARTICLES_FAIL: 'FETCH_ARTICLES_FAIL'
};

const devApi = 'http://localhost:8000/blog/articles';

const fetchArticles = async (dispatch) => {
    dispatch({
        type: actionTypes.FETCH_ARTICLES_START
    });

    fetch(devApi)
        .then(async res => {
            const articles = await res.json();

            dispatch({
                type: actionTypes.FETCH_ARTICLES_SUCCESS,
                articles
            });
        })
        .catch(async err => {

            await dispatch({
                type: actionTypes.FETCH_ARTICLES_FAIL,
                error: err
            });
        });
};

export {fetchArticles, actionTypes}
