import React, { use } from "react";
import BookCard from "../BookCard/BookCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
    const books = use(booksPromise);
    // console.log(books);
    return (
        <div className="my-12">
            <h2 className="font-bold text-3xl text-center">All Books</h2>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-6 p-3">
                {books.map((book, index) => {
                    return (
                       <BookCard key={index} book={book}></BookCard> 
                    );
                })}
            </div>
        </div>
    );
};

export default AllBooks;
