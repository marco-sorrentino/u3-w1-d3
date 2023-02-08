import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import scifi from "../data/scifi.json";
import RightSingleBook from "./RightSingleBook";

class RightBookList extends Component {
  state = {
    query: "",
  };

  filterBookList(event) {
    console.log(event.target.value);
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    return (
      <>
        <Container>
          <div className="my-5">
            <input
              onChange={(event) => this.filterBookList(event)}
              type="text"
            />
          </div>
          <Row>
            {scifi
              .filter((el) => {
                return el.title
                  .toLowerCase()
                  .includes(this.state.query.toLowerCase());
              })
              .map((el, i) => {
                return <RightSingleBook key={i} bookProp={el} />;
              })}
          </Row>
        </Container>
      </>
    );
  }
}

export default RightBookList;
