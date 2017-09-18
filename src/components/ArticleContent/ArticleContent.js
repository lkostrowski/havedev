import React from 'react';
import Markdown from 'react-markdown';
import './ArticleContent.css';

const ArticleContent = ({content}) => (
    <article className="article-content">
        <Markdown source={content}/>
    </article>
);

export default ArticleContent;