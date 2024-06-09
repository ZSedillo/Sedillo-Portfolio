import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import Project1 from './project1.jsx'
import Project2 from './project2.jsx'
import Project3 from './project3.jsx'

import MyWebsiteAbout from './MyWebsiteAbout.jsx'
import MyWebsiteWork from './MyWebsiteWork.jsx'
import MyWebsiteNoteP from './MyWebsiteNoteP.jsx'

import Email from './Email.jsx'

import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom"


const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
    },
    {
        path:"App",
        element:<App/>,
    },
    {
        path:"MyWebsite",
        element:<MyWebsiteAbout/>,
    },
    {
        path:"MyWebsiteWork",
        element:<MyWebsiteWork/>,
    },
    {
        path:"MyWebsiteNoteP",
        element:<MyWebsiteNoteP/>,
    },
    {
        path:"blackjack",
        element:<Project1/>,
    },
    {
        path:"dice",
        element:<Project2/>,
    },
    {
        path:"drumkit",
        element:<Project3/>,
    },
    {
        path:"email",
        element:<Email/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)