import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage/Homepage";
import Books from "../pages/Books/Books";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../pages/BookDetails/BookDetails";
import PageToRead from "../pages/PageToRead/PageToRead";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Homepage></Homepage>,
            },
            {
                path: "/books",
                element: <Books></Books>,
            },
            {
                path: "/bookDetails/:id",
                element: <BookDetails></BookDetails>,
                loader: () => fetch("/booksData.json"),
            },
            {
                path: "/page-to-read",
                Component: PageToRead,
            },
        ],
        errorElement: <ErrorPage></ErrorPage>,
    },
]);
