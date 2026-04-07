import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [storedBooks, setStoredBooks] = useState([]);
    const [wishlist, setWishList] = useState([]);

    const handleMarkAsRead = (currentbook) => {
        // console.log(book)
        // console.log(currentbook);
        const isExistBook = storedBooks.find((storedBook) => storedBook.bookId === currentbook.bookId);
        if (isExistBook) {
            toast.error("The Book Already exist...");
        } else {
            setStoredBooks([...storedBooks, currentbook]);
            toast.success(`${currentbook.bookName} is added to mark as read`);
        }
        // console.log(storedBooks);
    };

    const handleWishList = (currentbook) => {
        // console.log(book)
        // console.log(currentbook);

        const isExistInReasList = storedBooks.find((book) => book.bookId === currentbook.bookId);
        if (isExistInReasList) {
            toast.error("This book is already in read list");
            return;
        }

        const isExistBook = wishlist.find((storedBook) => storedBook.bookId === currentbook.bookId);
        if (isExistBook) {
            toast.error("The Book Already exist...");
        } else {
            setWishList([...wishlist, currentbook]);
            toast.success(`${currentbook.bookName} is added to wish list`);
        }
        // console.log(wishlist);
    };

    const data = {
        storedBooks,
        setStoredBooks,
        handleMarkAsRead,
        wishlist,
        setWishList,
        handleWishList
    };

    return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
