import React, { useState, useEffect, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Heading from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Cart from "./src/components/Cart";
import Error from "./src/components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";

const Contact = lazy(() => import("./src/components/Contact"));
const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "sandeep reddy",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Heading />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
        element: <About />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>loading contact us page..</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
