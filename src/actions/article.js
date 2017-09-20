import fetch from 'isomorphic-fetch';

const actionTypes = {
    FETCH_ARTICLE_START: 'FETCH_ARTICLE_START',
    FETCH_ARTICLE_SUCCESS: 'FETCH_ARTICLE_SUCCESS',
    FETCH_ARTICLE_FAIL: 'FETCH_ARTICLE_FAIL'
};

const devApi = 'http://localhost:8000/blog/article/';

const fetchArticle = async (dispatch, slug) => {
    dispatch({
        type: actionTypes.FETCH_ARTICLE_START
    });

    fetch(devApi + slug)
        .then(async res => {
            const article = await res.json();

            dispatch({
                type: actionTypes.FETCH_ARTICLE_SUCCESS,
                article
            });
        })
        .catch(async err => {

            await dispatch({
                type: actionTypes.FETCH_ARTICLE_FAIL,
                error: err
            });
        });
};

export {fetchArticle, actionTypes}
