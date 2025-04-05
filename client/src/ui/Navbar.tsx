import React from 'react'
import Button from './Button.tsx';

function Navbar() {
  const user:any = localStorage.getItem('user');
  const baseUrl: string = 'http://localhost:5173/';
  
  if (!user) {
    throw new Error('User not logged in');
  }

  return (
    <div className='w-11/12 flex justify-between items-center mx-auto mt-2 bg-slate-100'>
    <div>
    LOGO
    </div>
    <div>
    <Button config={{type: 'solid', content: 'Log In', url: baseUrl+'auth/login'}} />
    </div>
    </div>
  )
}

export default Navbar