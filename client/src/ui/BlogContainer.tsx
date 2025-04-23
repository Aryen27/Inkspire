import React from 'react'

function BlogConatiner({ blog }) {
  const brief = blog.content.split('.', 1);
  return (
    <div className='my-2 border-b w-full'>
    <h4 className='font-bold text-md'> 
    {blog.title}
    </h4>
    <span className = 'text-slate-400 text-[0.65rem] font-normal italic' > { brief } </span>
  )
}

export default BlogConatiner;