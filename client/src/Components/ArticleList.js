import React from 'react';
import Article from './Article';

const ArticleList = (props) => {
    if (props.searchRes !== null) {
        var toReturn = <div> </div>;
        props.searchRes.forEach(element => {
            toReturn +=<div><Article infos={element._source.fields.text} /></div>;
        })
        return toReturn;
    }
    else {
        return null;
    }
};
export default ArticleList;
