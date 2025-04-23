import React from 'react'

function BlogSideCard({blog}) {
  let blogDate:(string|Date) = new Date(blog.createdAt);
  blogDate = blogDate.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
  return (
    <div className='flex flex-col border-l w-full px-6 mb-3'>
    <span className= 'font-bold text-[0.6rem] py-2' > { blog.title } </span>
    <span className='font-normal text-[0.4rem] text-slate-500'>{blogDate}</span>
    </div>
  )
}

export default BlogSideCard