import React from 'react'

function BlogSideCard({blog}) {
  let blogDate:(string|Date) = new Date(blog.createdAt);
  blogDate = blogDate.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
  return (
    <div >
    <span className= 'font-bold text-[0.7rem]' > { blog.title } </span>
    <span className='font-normal text-[0.5rem] text-slate-500'>{blogDate}</span>
    </div>
  )
}

export default BlogSideCard