import React from 'react'

function SignUp() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Hola');
  }

  return (
  <div className='bg-slate-50 h-screen'>
    <div className="flex items-center justify-center  max-h-fit md:h-fit">
    <form className="rounded-md shadow-xl mx-auto mt-4 py-4 bg-white text-black min-h-min flex flex-col items-center justify-center gap-2 w-1/4 max-h-2  md:w-1/3 text-[0.5rem] md:mt-8"
      onSubmit={handleSubmit}>
    <legend className="text-lg text-teal-700 font-semibold">Sign Up</legend>
    <div className="w-2/3 flex flex-col gap-2 font-semibold">
    <div className="flex flex-col gap-1">
    <label htmlFor="username">Username</label>
    <input type="text" name="username" id="username" required className="rounded-sm border-solid border-slate-300 border py-0.5 font-normal"/>
    </div>
    
    <div className="flex flex-col gap-1">
    <label htmlFor="email">Email ID</label>
    <input type="email" name="email" id="emailid" required className="rounded-sm border-solid border-slate-300 border py-0.5 font-normal"/>
    </div>
    
    <div className="flex flex-col gap-1">
    <label htmlFor="password">Password</label>
    <input type="text" name="password" id="pass" required className="rounded-sm border-solid border-slate-300 border py-0.5 font-normal"/>
    </div>
    
    <div className="flex flex-col gap-1">
    <label htmlFor="confirmPassword">Confirm Password</label>
    <input type="text" name="confirmPassword" id="confirmPass" required className="rounded-sm border-solid border-slate-300 border py-0.5 font-normal"/>
    </div>
    
    <div className="flex justify-evenly items-center gap-4 pt-2">
    <button type="submit" className="bg-teal-700 py-1 px-3 rounded-md text-white hover:grow">SUBMIT</button>
    <button type="reset" className="bg-teal-700 py-1 px-3 rounded-md text-white hover:grow">RESET</button>
    </div>
    </div>
    </form>
    </div>
  </div>
  )
}

export default SignUp;