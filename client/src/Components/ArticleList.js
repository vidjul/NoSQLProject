import React from 'react';
import Article from './Article';

const ArticleList = (props) => {
    if (props.searchRes !== null) {
        var rows = [];
        props.searchRes.forEach(element => {
            rows.push(<div>
                <Article infos={element._source.fields.text}/>
            </div>);
        });
        return <div id="accordion">
        {rows}
    </div>;
    }
    else {
        return null;
    }
};
export default ArticleList;
