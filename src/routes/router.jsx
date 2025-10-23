import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import CategoryNews from '../pages/CategoryNews';
import BookMarkedNewsList from '../components/BookMarkedNewsList';
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Home></Home>
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch("/news.json").then(res => res.json())
            },
            {
                path: "/bookmarkednews",
                element: <BookMarkedNewsList></BookMarkedNewsList>
            }
        ]
    },
    {
        path: "/auth",
        element: <h1>Authentication Page</h1>
    },
    {
        path: "/news",
        element: <h1>News Page</h1>
    },
    {
        path: "/*",
        element: <h1>Error Page</h1>
    },
])
export default router;