import getDummyArticle from '../services/SingleArticleProvider';

const defaultState = {
    content: getDummyArticle()
};

const article = (state = defaultState, action) => {
    return state;
};

export default article;