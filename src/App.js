import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import Error from "./Components/Error";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";


const AppLayout = () => (
        <div className="main">
            <Header/>
            <Outlet/> 
            <Footer/>
        </div> 
)

const AppRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children : [
            {
                path : "/",
                element : <Body/>,
            },
            {
                path : "/about",
                element : <About/>,
            },
            {
                path : "/contact",
                element : <Contact/>,
            },
            {
                path : "/restaurants/:resID",
                element : <RestaurantMenu/>,
            },

        ],
        errorElement : <Error/>
    },  
    
]);

const root = ReactDOM.createRoot(document.getElementById("top"));

root.render(<RouterProvider router={AppRouter}/>);



