import React, { Component } from 'react';
import Article from './Article';

class ArticleList extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }


    onScroll = () => {
        if (
            (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
            this.props.searchRes
        ) {
            this.props.onPaginatedSearch();
        }
    }


    render() {
        if (this.props.searchRes !== null) {
            let rows = [];
            this.props.searchRes.forEach((element, index) => {
                rows.push(<Article infos={element._source.fields.text} key={index} />);
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