import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Rating from "./rating";
import Price from "./price";

const Books = ( { book } ) => {
    return (
                        <div className="book">
                            <Link to={`/books/${book.id}`}>
                                <figure className="book__img--wrapper">
                                    <img src={book.url} alt="" />
                                </figure>
                            </Link>
                            <div className="book__title">
                                <Link to={`/books/${book.id}`} className="book__title--link">
                                    {book.title}
                                </Link>
                            </div>
                            <div className="book__ratings">
                             <Rating rating={book.rating} />
                            </div>
                           <Price salePrice={book.saleprice} originalPrice={book.originalPrice}/>
                        </div>
                    
    )
}

export default Books; 