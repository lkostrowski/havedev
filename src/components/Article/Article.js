import React from 'react';
import PT from 'prop-types';

const Article = ({title}) => {
    return (
        <article>
            {title}
        </article>
    );
};

Article.propTypes = {
    title: PT.string.isRequired
};

export default Article;