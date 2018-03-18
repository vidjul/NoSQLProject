/*import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

class Article extends Component {
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
*/


import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card, CardSubtitle, CardTitle } from 'reactstrap';

class Article extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
          
        <Button color="primary" onClick={this.toggle}  style={{ marginBottom: '1rem' }}>{this.props.infos.title}</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card style={{ marginBottom: '1rem' }}>
          <CardTitle>{this.props.infos.title}</CardTitle>
          <CardSubtitle>{this.props.infos.dateline}</CardSubtitle>
            <CardBody>{this.props.infos.body}</CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Article;
