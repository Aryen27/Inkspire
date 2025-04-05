import React from 'react'
import github_icon from '../assets/github_icon.svg'
import linkedin_icon from '../assets/linkedin_icon.svg'

function Footer() {
  return (
    <div>
      <div className='bg-slate-100 w-11/12 m-auto py-2'>
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
            <ul className='flex flex-col gap-1 pb-2 items-start'>
            <li className='font-semibold' > Contact </li>
            <li className = 'flex gap-2 items-center' > Github &nbsp;   <img src = { github_icon } className='w-4 h-4'/></li>
            <li className='flex gap-2 items-center'>Linkedin <img src = { linkedin_icon } className='w-4 h-4'/></li>
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