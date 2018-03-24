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
        switch (this.props.reqStatus) {
            case 'loading':
                return 'Please wait...'
            case 'error':
                return 'error'
            case 'loaded':
                let rows = [];
                this.props.searchRes.forEach((element, index) => {
                    rows.push(<Article infos={element._source.fields.text} key={index} />);
                });
                return (
                    <div id="accordion">
                        {rows}
                    </div>
                );
            default:
                return null;
        }
    }
}

export default ArticleList;