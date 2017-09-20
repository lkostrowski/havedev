import React from 'react';
import PT from 'prop-types';
import ArticleContent from '../../components/ArticleContent/ArticleContent';
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Header from "../../components/Header/Header";
import {connect} from 'react-redux';
import {fetchArticle} from "../../actions/article";

class ArticleView extends React.Component {
    componentDidMount() {
        fetchArticle(this.props.dispatch, this.props.slug.replace('/blog/', ''));

    }

    render() {
        return (
            <div className="article-view">
                <Header/>
                <PageWrapper>
                    {this.props.error && <p>{this.props.error}</p> }
                    {this.props.loaded && <ArticleContent content={this.props.content}/>}
                </PageWrapper>
            </div>
        )
    }
}

ArticleView.propTypes = {
    content: PT.string,
    pathname: PT.string,
    error: PT.string,
    loaded: PT.bool
};

function mapStateToProps(state) {
    return {
        content: state.article.content,
        error: state.article.error,
        loaded: state.article.loaded,
        slug: state.router.location.pathname
    }
}

export default connect(mapStateToProps)(ArticleView);