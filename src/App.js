import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { useState, useEffect } from "react";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"))

const About = lazy(() => import("./components/About"))

const AppLayout = () => {
    const [userName, setUserName] = useState();

    //authentication
    useEffect(() => {
        // Make an API call and send username and password
        const data = {
            name: "Gayatri Singh",
        };
        setUserName(data.name);
    }, []);

    return (
        // overridden default value
        <UserContext.Provider value={{ loggedInUser: userName , setUserName}}> 
            <div className="app">
                <Header />
                <Outlet /> {/* This will render different components based on the route */}
            </div>
        </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            }
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
