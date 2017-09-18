import React from 'react';
import Article from '../Article/Article';
import './ArticlesList.css';
import {Link} from "react-router-dom";

const ArticlesList = ({articles}) => {
    return (
        <ul className="articles-list">
            {articles.map((article, index) => {
                return (
                    <Link to={`/blog/${article.slug}`} key={index} className="articles-list__article" >
                        <Article {...article} />
                    </Link>
                );
            })}
        </ul>
    )
};

export default ArticlesList;