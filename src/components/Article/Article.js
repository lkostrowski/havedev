import React from 'react';
import PT from 'prop-types';

import "./Article.css";

const Article = ({title, published, image: {src}, mix = ''}) => {
    return (
        <article className={`article ${mix}`}>
            <div className="article__meta">
                <span className="article__title">{title}</span>
                <span className="article__date">{published}</span>
            </div>
            <img className="article__image" src={src}/>
        </article>
    );
};

Article.propTypes = {
    title: PT.string.isRequired,
    image: PT.shape({
        src: PT.string.isRequired
    }),
    published: PT.string,
    className: PT.string
};

export default Article;