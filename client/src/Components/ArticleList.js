import React, { Component } from 'react';
import Article from './Article';

class ArticleList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.searchRes !== null) {
            let rows = [];
            this.props.searchRes.forEach(element => {
                rows.push(<div><Article infos={element._source.fields.text} /></div>);
            });
            return (
                <div id="accordion">
                {rows}
                </div>
            );
        }
        else {
            return null;
        }
    }
}

export default ArticleList;