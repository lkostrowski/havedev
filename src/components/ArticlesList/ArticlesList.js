import React from 'react';
import Article from '../Article/Article';
import './ArticlesList.css';

const ArticlesList = ({articles}) => {
    return (
        <ul className="articles-list">
            {articles.map((article, index) => {
                return <Article {...article} key={index} />;
            })}
        </ul>
    )
};

export default ArticlesList;