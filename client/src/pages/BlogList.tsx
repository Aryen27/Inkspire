import React from 'react'
import { getAllBlogs } from '../services/apiBlogs';
import { useLoaderData } from 'react-router-dom';
import BlogCard from '../ui/BlogCard';
import BlogContainer from '../ui/BlogContainer';

export async function loader() {
  const blogs = await getAllBlogs();
  return blogs;
}

function BlogList() {
  let blogs = useLoaderData();
  blogs = blogs.data;
  console.log(newest.splice(0,5));

  return (
    <div className= 'w-11/12 flex mx-auto' >
      <div className='w-[60%]'>
      {blogs.map((blog) => (
        <BlogContainer key={blog.bid} blog={blog} />
      ))}
      </div>
      <div className='w-[40%]'>  
      < BlogCard />
      </div>
    </div>
  )
}

export default BlogList;