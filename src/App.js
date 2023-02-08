import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BookList from "./component/BookList";
import RightBookList from "./component/RightBookList";

function App() {
  return (
    <div className="App">
      {/* <BookList /> */}
      <RightBookList />
    </div>
  );
}

export default App;
