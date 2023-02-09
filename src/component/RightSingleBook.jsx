import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import CommentArea from "./CommentArea";

const RightSingleBook = (props) => {
  return (
    <>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.bookProp.img} />
          <Card.Body>
            <Card.Title>{props.bookProp.title}</Card.Title>
            <Card.Text>{props.bookProp.price}</Card.Text>
            <CommentArea asin={props.bookProp.asin} />
            <Button variant="primary">{props.bookProp.price}</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default RightSingleBook;
