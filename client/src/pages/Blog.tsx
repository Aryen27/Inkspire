import React from 'react'
import { getAllBlogs } from '../services/apiBlogs';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
  const blogs = await getAllBlogs();
  return blogs;
}

function Blog() {
  const blogs = useLoaderData();
  console.log(blogs);
  return (
    <div>Blog</div>
  )
}

export default Blog;