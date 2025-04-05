import React from 'react'

function Button({config}) {
  const content = config.content;

  return (
    <div className='flex items-center'>
    <button className='bg-teal-700 py-0.5 px-2 m-auto rounded-sm text-[0.6rem] text-white'>
    { content }
    </button>
    </div>
  )
}

export default Button