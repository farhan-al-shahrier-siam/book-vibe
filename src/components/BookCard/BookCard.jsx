import React from "react";
import { GiStaryu } from "react-icons/gi";
const BookCard = ({book}) => {
    return (
        <div className="card bg-base-100 shadow-sm border rounded-2xl border-gray-300 p-6">
            <figure className="p-6 bg-gray-50">
                <img className="rounded-xl h-62.5" src={book.image} alt={book.bookName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{book.bookName}</h2>
                <div className="flex items-center gap-2">
                    {book.tags.map((tag, index) => (
                        <div key={index} className="badge text-green-500 bg-green-50  text-lg">{tag}</div>
                    ))}
                </div>
                <p className="font-semibold text-lg">By: {book.author}</p>
                <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4">
                    <div className="font-semibold ">{book.category}</div>
                    <div className="font-semibold flex items-center gap-2">
                        <GiStaryu className="text-xl" /> {book.rating}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
