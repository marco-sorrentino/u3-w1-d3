import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  state = {};
  render() {
    return (
      <>
        {this.props.comments && (
          <Row>
            <Col>Commento</Col>
            <Col className="mb-3">Voto</Col>
          </Row>
        )}
        {this.props.comments.map((el, index) => {
          return (
            <SingleComment comment={el.comment} rate={el.rate} key={index} />
          );
        })}
      </>
    );
  }
}

export default CommentList;
