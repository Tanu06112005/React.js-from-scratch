// import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayer, Login } from './components/index.js'


import AddPost from "./pages/AddPost";
import SignUp from './pages/SignUp'
import EditPost from "./pages/EditPost";

import Post from "./pages/Post";

import AllPosts from "./pages/AllPosts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayer authentication={false}>
                    <Login />
                </AuthLayer>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayer authentication={false}>
                    <SignUp />
                </AuthLayer>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayer authentication>
                    {" "}
                    <AllPosts />
                </AuthLayer>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayer authentication>
                    {" "}
                    <AddPost />
                </AuthLayer>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayer authentication>
                    {" "}
                    <EditPost />
                </AuthLayer>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
)