import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [storedBooks, setStoredBooks] = useState([]);

    const handleMarkAsRead = (currentbook) => {
        // console.log(book)
        console.log(currentbook);
        const isExistBook = storedBooks.find((storedBook) => storedBook.bookId === currentbook.bookId);
        if (isExistBook) {
            alert("The Book Already exist...");
        } else {
            setStoredBooks([...storedBooks, currentbook]);
            alert(`${currentbook.bookName} is added to mark as read`)
        }
        console.log(storedBooks);
    };
    const data = {
        storedBooks, setStoredBooks, handleMarkAsRead
    }

    return (<BookContext.Provider value={data}>{children}</BookContext.Provider>);
};

export default BookProvider;
