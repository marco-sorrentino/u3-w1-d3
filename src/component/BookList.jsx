import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleBook from "./SingleBook";
import horror from "../data/horror.json";

class BookList extends Component {
  render() {
    return (
      <Container>
        <Row>
          {horror.map((el, index) => (
            <Col key={index}>
              <SingleBook img={el.img} title={el.title} price={el.price} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
