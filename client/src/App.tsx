import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './pages/HomeLayout.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import BlogList, {loader as blogsLoader} from './pages/BlogList.tsx'
import UserPage from './pages/UserPage.tsx'
import SignUp from './pages/SignUp.tsx';
import Login from './pages/Login.tsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
        path: "",
        loader: blogsLoader,
        element: <BlogList/>,
      },
      {
        path: "user",
        element: <UserPage/>,
      },
    ],
  },
    {
      path: '/auth',
      errorElement: <ErrorPage/>,
      children: [
        {
          path: 'signup',
          element: <SignUp/>
        },
        {
          path: 'login',
          element: <Login/>
        },
      ]
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
