import { Component } from "react";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import CommentArea from "./CommentArea";

class RightSingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Col>
          <Card
            onClick={() => this.setState({ selected: !this.state.selected })}
            style={{ width: "18rem" }}
          >
            <Card.Img variant="top" src={this.props.bookProp.img} />
            <Card.Body>
              <Card.Title>{this.props.bookProp.title}</Card.Title>
              <Card.Text>{this.props.bookProp.price}</Card.Text>
              {this.state.selected && (
                <CommentArea asin={this.props.bookProp.asin} />
              )}
              <Button variant="primary">{this.props.bookProp.price}</Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default RightSingleBook;
