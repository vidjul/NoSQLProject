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

  getColor() {
    if (this.props.infos.body) {
      if (this.props.infos.body.length > 2000) {
        return "danger"
      }
      else if (this.props.infos.body.length > 1000) {
        return "info"
      }
      else {
        return "success"
      }
    }
    else{
      return "dark"
    }
  }

  render() {
    return (
      <div>

        <Button color={this.getColor()} onClick={this.toggle} style={{ marginBottom: '1rem' }}>{this.props.infos.title}</Button>
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
