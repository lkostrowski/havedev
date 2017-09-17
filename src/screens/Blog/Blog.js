import React from 'react';
import Header from '../../components/Header/Header';
import ArticlesList from '../../components/ArticlesList/ArticlesList';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

import getDummyArticles from '../../services/PostsProvider';

class Blog extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <PageWrapper>
                    <ArticlesList articles={getDummyArticles()}/>
                </PageWrapper>
            </div>
        )
    }
}

export default Blog;
