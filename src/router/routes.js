import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Post from "../pages/Post";
import Favorites from "../pages/Favorites";
import Photos from "../pages/Photos";


export const privateRoutes = [
    { path: '/posts', element: Posts, exact: true },
    { path: '/posts/:id', element: Post, exact: true },
    { path: '/favorites', element: Favorites, exact: false },
    { path: '/photos', element: Photos, exact: false },
    { path: '/about', element: About, exact: false },
    { path: '/error', element: Error, exact: false },
];

export const publicRoutes = [
    { path: '/login', element: Login, exact: false },
];