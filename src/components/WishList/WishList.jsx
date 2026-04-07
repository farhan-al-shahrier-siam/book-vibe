import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookContext";
import BookCard from "../BookCard/BookCard";

const WishList = ({sortingType}) => {
    const { wishlist } = useContext(BookContext);

    const [sortedWishList, setSortedWishList] = useState(wishlist);

    useEffect(() => {
        if (sortingType) {
            if (sortingType === "pages") {
                const sortedData = [...wishlist].sort((a, b) => a.totalPages - b.totalPages);
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setSortedWishList(sortedData);
            } else if (sortingType === "rating") {
                const sortedData = [...wishlist].sort((a, b) => a.rating - b.rating);
                setSortedWishList(sortedData);
            }
        }
    }, [sortingType, wishlist]);

    if (sortedWishList.length === 0) {
        return (
            <div className="text-center space-y-2 p-9 bg-gray-200 rounded-2xl">
                <h2 className="text-3xl font-bold">Wish List is empty</h2>
                <p>Goto Home and select books</p>
                <a className="btn btn-accent" href="/">
                    Go Home
                </a>
            </div>
        );
    }

    return (
        <div className="grid gap-2">
            {sortedWishList.map((book, index) => (
                <BookCard key={index} book={book}></BookCard>
            ))}
        </div>
    );
};

export default WishList;
