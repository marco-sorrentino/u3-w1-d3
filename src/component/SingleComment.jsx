import { Component } from "react";
import { Row, Col } from "react-bootstrap";

class SingleComment extends Component {
  state = {};

  render() {
    return (
      <>
        <Row className="mt-2">
          <Col>{this.props.comment}</Col>
          <Col>{this.props.rate}</Col>
        </Row>
      </>
    );
  }
}
export default SingleComment;
