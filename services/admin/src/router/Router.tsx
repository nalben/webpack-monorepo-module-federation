import { App } from "@/components/App";
import { LazyAbout } from "@/pages/about/About.lazy";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";



const routes = [
    {
        path: "/admin",
        element: <App />,
        children: [
            {
                path: '/admin/About',
                element: <Suspense fallback={'Loading...'} ><LazyAbout /></Suspense>
            },
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;
