import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";


export const privateRoutes = [
  { path: '/posts', element: Posts },
  { path: '/about', element: About },
  { path: '/error', element: Error },  
];

export const publicRoutes = [
  { path: '/login', element: Login },
];