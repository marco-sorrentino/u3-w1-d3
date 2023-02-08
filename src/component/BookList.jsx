import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleBook from "./SingleBook";
import horror from "../data/horror.json";

class BookList extends Component {
  // Creazione state in cui andrà dato salvato
  state = {
    query: "",
  };
  // Creazione funzione, in questo caso metodo che andrà a prendere il valore input
  filterBookList(e) {
    console.log(e.target.value);
    this.setState({
      query: e.target.value,
    });
  }

  render() {
    return (
      <Container>
        <div className="my-5">
          <input onChange={(event) => this.filterBookList(event)} type="text" />
        </div>
        <Row>
          {horror
            .filter((el) => {
              return el.title
                .toLowerCase()
                .includes(this.state.query.toLowerCase());
            })
            .map((el, index) => (
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
