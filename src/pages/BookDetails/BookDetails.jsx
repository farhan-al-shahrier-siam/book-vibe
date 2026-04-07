import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookContext";

const BookDetails = () => {
    const { id } = useParams();
    // console.log(id)

    const books = useLoaderData();
    // console.log(books)

    const selectedBook = books.find((book) => book.bookId == id);
    // console.log(selectedBook);

    const {handleMarkAsRead, handleWishList} = useContext(BookContext)

    // console.log(handleMarkAsRead, storedBooks)

    return (
        <div>
            <div className="card grid md:grid-cols-2 rounded-2xl bg-base-100 shadow-sm container mx-auto mt-10">
                <figure className="bg-gray-200 rounded-2xl">
                    <img src={selectedBook.image} className="max-h-100" alt="Album" />
                </figure>
                <div className="card-body space-y-3">
                    <h2 className="card-title text-2xl">{selectedBook.bookName}</h2>
                    <h2 className="card-title">{selectedBook.author}</h2>
                    <p className="py-2 border-y">{selectedBook.category}</p>
                    <p>{selectedBook.review}</p>
                    <div className="flex items-center gap-2">
                        {selectedBook.tags.map((tag, index) => (
                            <div key={index} className="badge text-green-500 bg-green-50  text-lg">
                                {tag}
                            </div>
                        ))}
                    </div>
                    <div className="border-t space-y-3">
                        <div className="flex items-center justify-between gap-2">
                            <span>Number of Pages:</span> <span>{selectedBook.totalPages}</span>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                            <span>Publisher:</span> <span>{selectedBook.publisher}</span>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                            <span>Year of Publishing:</span> <span>{selectedBook.yearOfPublishing}</span>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                            <span>Rating:</span> <span>{selectedBook.rating}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button onClick={() => handleMarkAsRead(selectedBook)} className="btn">
                                Mark as Read
                            </button>
                            <button onClick={() => handleWishList(selectedBook)} className="btn btn-accent">Add to WishList</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
