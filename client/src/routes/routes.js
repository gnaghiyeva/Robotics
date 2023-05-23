import AddBlog from "../pages/AddBlog";
import BlogDetail from "../pages/BlogDetail";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";

export const ROUTES = [
    {
        path:'/',
        element:<MainRoot/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/add-blog',
                element:<AddBlog/>
            },
            {
                path:'/:id',
                element:<BlogDetail/>
            }
        ]
    }
]