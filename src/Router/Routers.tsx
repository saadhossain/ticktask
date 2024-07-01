import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import Main from '../layout/Main';
import AllTodos from '../pages/AllTodos';
import Login from '../pages/Login';

export const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path:'/todos',
                element: <AllTodos/>
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    }
]);