import {createBrowserRouter} from "react-router-dom";
import Quiz from "../pages/quiz";
import Result from "@/pages/result";
import Layout from "@/layout";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        errorElement: <div>Error element</div>,
        children: [
            {
                path: '/',
                element: <Quiz />
            },
            {
                path: 'result',
                element: <Result />
            }
        ]
    },
])
export default router;