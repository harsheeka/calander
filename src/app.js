import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
    return (
        <div>``
          <Header/>
          <Outlet/>
        </div>
    )
  };

  const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element : <AppLayout/>,
            children : [
                {
                    path:"/",
                    element : <Body/>,
                },
            ] 
        },
    ]
  )
  
  root.render(<RouterProvider router={appRouter} />);

