import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About.jsx";
import Body from "./components/Body.jsx";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import CartDetails from "./components/CartDetails.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.jsx";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path:"/cart",
        element:<CartDetails/>,
      }
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={AppRouter} />
  </Provider>
);
