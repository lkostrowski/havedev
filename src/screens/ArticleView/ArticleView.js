import React from 'react';
import PT from 'prop-types';
import ArticleContent from '../../components/ArticleContent/ArticleContent';
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import getDummyMarkdown from '../../services/SingleArticleProvider';
import Header from "../../components/Header/Header";


class ArticleView extends React.Component {
    render() {
        return (
            <div className="article-view">
                <Header/>
                <PageWrapper>
                    <ArticleContent content={getDummyMarkdown()}/>
                </PageWrapper>
            </div>
        )
    }
}

ArticleView.propTypes = {

};

export default ArticleView;