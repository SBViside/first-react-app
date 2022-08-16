import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Post from "../pages/Post";


export const privateRoutes = [
    { path: '/posts', element: Posts, exact: true },
    { path: '/posts/:id', element: Post, exact: true },
    { path: '/about', element: About, exact: false },
    { path: '/error', element: Error, exact: false },
];

export const publicRoutes = [
    { path: '/login', element: Login, exact: false },
];