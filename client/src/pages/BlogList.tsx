import React from 'react'
import { getAllBlogs, updateBlog, getBlogById } from '../services/apiBlogs';
import { useLoaderData } from 'react-router-dom';
import BlogSideCard from '../ui/BlogSideCard';
import BlogContainer from '../ui/BlogContainer';


export async function loader() {
  const blogs = await getAllBlogs();
  // const updatedBlog= await updateBlog(5, {
  //   "title": "Mastering the JavaScript Promises!!!",
  //   "content": "Promises in JavaScript allow you to handle asynchronous operations more cleanly. This blog covers how to create, chain, and handle errors using promises in real-world scenarios."
  // });
  // console.log(updatedBlog);
  return blogs;
}

function BlogList() {
  let blogs = useLoaderData();
  blogs = blogs.data;
  let newest = blogs.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    if (dateA > dateB) return -1;
    if (dateA < dateB) return 1;
  
    return b.likes - a.likes;
  }).slice(0,10);
  console.log(newest);
  return (
    <div className= 'w-11/12 flex mx-auto' >
      <div className='w-[60%]'>
      {blogs.map((blog) => (
        <BlogContainer key={blog.bid} blog={blog} />
      ))}
      </div>
    <div className = 'w-[40%]' >  
    {
      newest.map((nb) => (
        <BlogSideCard key={nb.bid} blog= {nb}  />
      ))     
    }
      </div>
    </div>
  )
}

export default BlogList;