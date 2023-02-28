import PostsPage from "./pages/PostsPage";
import AboutPage from "./pages/AboutPage";
import ToDoListPage from "./pages/ToDoListPage";
import HomePage from "./pages/HomePage";


export const routes = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/posts',
        element: <PostsPage />,
    },
    {
        path: '/about',
        element: <AboutPage />,
    },
    {
        path: '/dynamic',
        element: <ToDoListPage />,
    },
];
