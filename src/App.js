import Book from "./Pages/Book";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { books } from "./data"
import BooksInfo from "./Pages/BooksInfo";
import Cart from "./Pages/Cart";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart ]= useState ([])

  function addToCart(book) {
    setCart([...cart, book])
  }

  useEffect (() => {
    
  }, [cart])
  return (
    < Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/books" exact render={()=> <Book books={books}/>} />
      <Route path="/books/:id" render={()=> <BooksInfo books={books} addToCart={addToCart}/>} />
      <Route path="/cart" render={()=> <Cart books={books}/>} />
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
