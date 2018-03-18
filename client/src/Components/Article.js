import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

class Article extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{this.props.infos.title}</CardTitle>
            <CardSubtitle>{this.props.infos.dateline}</CardSubtitle>
            <CardText>{this.props.infos.body}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Article;
