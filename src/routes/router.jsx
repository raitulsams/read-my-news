import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>
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