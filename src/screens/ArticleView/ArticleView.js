import React from 'react';
import PT from 'prop-types';
import ArticleContent from '../../components/ArticleContent/ArticleContent';
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Header from "../../components/Header/Header";
import {connect} from 'react-redux';

class ArticleView extends React.Component {
    render() {
        return (
            <div className="article-view">
                <Header/>
                <PageWrapper>
                    <ArticleContent content={this.props.content}/>
                </PageWrapper>
            </div>
        )
    }
}

ArticleView.propTypes = {
    content: PT.string
};

function mapStateToProps(state) {
    return {
        content: state.article.content
    }
}

export default connect(mapStateToProps)(ArticleView);