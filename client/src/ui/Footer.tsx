import React from 'react'

function Footer() {
  return (
    <div>
      <div className='bg-slate-200 w-11/12 m-auto py-2'>
        <div className='flex justify-evenly border-b-2 border-slate-400 w-4/5 m-auto text-[0.55rem] py-2'>
          <div>
          <ul className='flex flex-col gap-1 pb-2'>
          <li>Logo</li>
          <li>Quote</li>
          </ul>
          </div>
          <div>
          <ul className='flex flex-col gap-1 pb-2'>
          <li className='font-semibold'>Blogs</li>
          <li className='text-slate-800 font-[350]'>View Blogs</li>
          <li className='text-slate-800 font-[350]'>Add a Blog </li>
          </ul>
          </div>
            <div>
            <ul className='flex flex-col gap-1 pb-2'>
            <li className='font-semibold' > Contact </li>
              <li>Github</li>
              <li>Linkedin</li>
            </ul>
            </div>
        </div>
        <div className='text-center text-[0.4rem] text-slate-500 pt-2'>
        Inkspire© 2025
        </div>
      </div>
    </div>
  )
}

export default Footer