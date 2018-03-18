import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

const Article = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.infos.title}</CardTitle>
          <CardSubtitle>{props.infos.dateline}</CardSubtitle>
          <CardText>{props.infos.body}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};
export default Article;
