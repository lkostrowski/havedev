import React from 'react';
import Header from '../../components/Header/Header';
import ArticlesList from '../../components/ArticlesList/ArticlesList';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import {connect} from 'react-redux';
import {fetchArticles} from '../../actions/articles';

class Blog extends React.Component {

    componentDidMount() {
        // TODO: Move it to router middleware
        fetchArticles(this.props.dispatch);
    }

    render() {
        return (
            <div>
                <Header/>
                <PageWrapper>
                    <ArticlesList articles={this.props.articles}/>
                </PageWrapper>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles.articles
    }
}

export default connect(mapStateToProps)(Blog);
