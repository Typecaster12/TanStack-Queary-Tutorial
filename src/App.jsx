import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Components/Layout/MainLayout";
import Home from "./Pages/Home";
import FetchOld from "./Pages/FetchOld";
import FetchRq from "./Pages/FetchRq";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

//router
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/trad",
        element: <FetchOld />
      },
      {
        path: "/rq",
        element: <FetchRq />
      }
    ]
  }
])

const App = () => {
  //instance of QueryClient
  //responsible for, Managing all queries, mutations, and caches
  //Handling background data fetching.
  //Retrying on failures, stale times, etc
  const queryClient = new QueryClient();


  return (
    //this is a wrapper which provides the queryClient instance to all the components or complete react app's root(app.jsx);
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      {/* dvetools, to use this, we have to import and use like this; */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;