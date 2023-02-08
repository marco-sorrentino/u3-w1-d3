import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BookList from "./component/BookList";
import InputField from "./component/inputField";

function App() {
  return (
    <div className="App">
      <InputField />
      <BookList />
    </div>
  );
}

export default App;
