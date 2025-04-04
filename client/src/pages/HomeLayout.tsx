import React from 'react'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
  return (
    <>
    <div className='text-lg' >NavBar </div>
    <Outlet />
    <div className='text-lg' >Footer</div>
    </>
  )
}

export default HomeLayout