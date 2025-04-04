import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './pages/HomeLayout.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Blog from './pages/Blog.tsx'
import UserPage from './pages/UserPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "blog",
        element: <Blog/>,
      },
      {
        path: "user",
        element: <UserPage/>,
      },
    ],
  },
]);

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
