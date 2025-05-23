import React from 'react'

function BlogConatiner({ blog }) {
  const brief = blog.content.split('.', 1);
  let blogDate:(string|Date) = new Date(blog.createdAt);
  blogDate = blogDate.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
  return (
    <div className=' border-t w-[90%] py-2'>
    <h4 className='font-bold text-md'> 
    {blog.title}
    </h4>
    <span className = 'text-slate-400 text-[0.55rem] font-normal italic' > { brief } </span>
    <div>
    <span className='text-slate-400 text-[0.5rem]'>{blogDate}</span>
    <span className='text-slate-400 text-[0.5rem] px-3'>🩷{blog.likes}     </span>
     </div>
     </div>
  )
}

export default BlogConatiner;