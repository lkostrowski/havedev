import React from 'react';
import PT from 'prop-types';

import "./Article.css";

const Article = ({title, published, categories = [], tags = [], excerpt, mix = ''}) => {

    const renderCategories = () => categories.map(cat => <li className="article__category"
                                                             key={cat.id}>{cat.name}</li>);
    const renderTags = () => tags.map(tag => <li className="article__tag" key={tag.id}>{tag.name}</li>);

    return (
        <article className={`article ${mix}`}>
            <span className="article__title">{title}</span>
            {excerpt && <p className="article__excerpt">{excerpt}</p>}

            <div className="article__meta">
                <ul className="article__categories">
                    {renderCategories()}
                </ul>
                <div className="article__separator"/>
                <span className="article__date">{published}</span>
                <div className="article__separator"/>
                <ul className="article__tags">
                    {renderTags()}
                </ul>
            </div>
        </article>
    );
};

Article.propTypes = {
    title: PT.string.isRequired,
    excerpt: PT.string,
    categories: PT.array,
    tags: PT.array,
    published: PT.string,
    className: PT.string
};

export default Article;