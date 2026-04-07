import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookContext";
import BookCard from "../BookCard/BookCard";

const ReadList = ({ sortingType }) => {
    const { storedBooks } = useContext(BookContext);
    const [sortedReadList, setSortedReadList] = useState(storedBooks);

    useEffect(() => {
        if (sortingType) {
            if (sortingType === "pages") {
                const sortedData = [...storedBooks].sort((a, b) => a.totalPages - b.totalPages);
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setSortedReadList(sortedData);
            } else if (sortingType === "rating") {
                const sortedData = [...storedBooks].sort((a, b) => a.rating - b.rating);
                setSortedReadList(sortedData);
            }
        }
    }, [sortingType, storedBooks]);

    if (sortedReadList.length === 0) {
        return (
            <div className="text-center space-y-2 p-9 bg-gray-200 rounded-2xl">
                <h2 className="text-3xl font-bold">Reading List is empty</h2>
                <p>Goto Home and select books</p>
                <a className="btn btn-accent" href="/">
                    Go Home
                </a>
            </div>
        );
    }

    return (
        <div className="grid gap-2">
            {sortedReadList.map((book, index) => (
                <BookCard key={index} book={book}></BookCard>
            ))}
        </div>
    );
};

export default ReadList;
