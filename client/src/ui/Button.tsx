import React from 'react'

function Button({config}) {
  const { type, content, url }: { type: string, content: string, url: string } = config;

  const styleMap = {
    solid: 'bg-teal-700 py-0.5 px-2 m-auto rounded-sm text-[0.6rem] text-white',
    link: 'font-semibold hover:underline',
  };

  const handleClick= (e)=> {
    window.location.href = url;
  }

  return (
    <div className='flex items-center'>
    <button className={styleMap[type]}
      onClick={handleClick}>
    { content }
    </button>
    </div>
  )
}

export default Button