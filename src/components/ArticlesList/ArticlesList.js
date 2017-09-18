import React from 'react';
import Article from '../Article/Article';
import Masonry from 'react-masonry-component';
import './ArticlesList.css';
import {Link} from "react-router-dom";

const ArticlesList = ({articles}) => {
    return (
        <Masonry className="articles-list">
            {articles.map((article, index) => {
                return (
                    <Link to={`/blog/${article.slug}`} key={index} className="articles-list__article" >
                        <Article {...article} />
                    </Link>
                );
            })}
        </Masonry>
    )
};

export default ArticlesList;