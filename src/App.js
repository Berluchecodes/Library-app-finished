import Book from "./Pages/Book";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { books } from "./data"
import BooksInfo from "./Pages/BooksInfo";
function App() {
  return (
    < Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/books" component={()=> <Book books={books}/>} />
      <Route path="/books/1" component={()=> <BooksInfo books={books}/>} />
     
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
