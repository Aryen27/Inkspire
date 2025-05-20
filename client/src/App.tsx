import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './pages/HomeLayout.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import BlogList, {loader as blogsLoader} from './pages/BlogList.tsx'
import UserPage from './pages/UserPage.tsx'
import SignUp from './pages/SignUp.tsx';
import Login from './pages/Login.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools, ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools';

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
        path: "blogs",
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

const queryClient = new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    <ReactQueryDevtoolsPanel/>
      </QueryClientProvider>
    </>
  )
}

export default App
