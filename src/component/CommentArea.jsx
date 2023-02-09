import { Component } from "react";
import { Card } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    selected: false,
  };

  componentDidMount = () => {
    this.getData();
  };

  getData = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MDQxZWEyNDc4ZDAwMTNhMDU4MWUiLCJpYXQiOjE2NzU5NTMxODIsImV4cCI6MTY3NzE2Mjc4Mn0.QKw5IvBaHI-GXYmHoDTNgNdV0fExaLLN5jbv6D-zO9E",
          },
        }
      );

      if (res.ok) {
        const data = await res.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <Card.Text>Ciao</Card.Text>
      </>
    );
  }
}

export default CommentArea;
