import React, { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import BookCard from "../BookCard/BookCard";

const ReadList = () => {
    const { storedBooks } = useContext(BookContext);

    if(storedBooks.length === 0){
        return (
            <div className="text-center space-y-2 p-9 bg-gray-200 rounded-2xl">
                <h2 className="text-3xl font-bold">Reading List is empty</h2>
                <p >Goto Home and select books</p>
                <a className="btn btn-accent" href="/">Go Home</a>
            </div>
        )
    }

    return (
        <div className="grid gap-2">
            {storedBooks.map((book, index) => (
                <BookCard key={index} book={book}></BookCard>
            ))}
        </div>
    );
};

export default ReadList;
