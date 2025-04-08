import React, { useEffect } from "react";
import { redirect } from "react-router-dom";
import { useAuth } from "../context/authContext.tsx";
import Button from "../ui/Button.tsx";

function Login() {
  let { login } = useAuth();
  const baseUrlServer: string = `http://localhost:5000/`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Get data from form
    const data: any = new FormData(e.target);
    const email: string = data.get("email");
    const password: string = data.get("password");

    const body = { email, password };

    const reqOptions: any = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      credentials: "include",
    };

    const res = await fetch(baseUrlServer + "auth/login", reqOptions);
    const resData = await res.json();
    
    if (!res.ok || resData.success !== true) {
      throw new Error(resData.message || 'Login failed');
    }
    
    const { name }: { name: string } = resData.data;
    const user = { name, email };
    

    await login(user, resData.token); //Set Auth status of app
    window.location.href = "http://localhost:5173/"; //Redirect to HOME
  };

  return (
    <div className="bg-slate-50 h-screen">
      <div className="flex items-center justify-center  max-h-fit md:h-fit">
        <form
          className="rounded-md shadow-xl mx-auto mt-4 py-5 pb-8 bg-white text-black min-h-min flex flex-col items-center justify-center gap-2 w-1/4 max-h-2  md:w-1/3 text-[0.5rem] md:mt-8"
          onSubmit={handleSubmit}
          method="POST"
        >
          <legend className="text-lg text-teal-700 font-semibold">Login</legend>
          <div className="w-2/3 flex flex-col gap-3 font-semibold">
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="emailid"
                required
                className="rounded-sm border-solid border-slate-300 border py-0.5 font-normal"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                id="pass"
                required
                className="rounded-sm border-solid border-slate-300 border py-0.5 font-normal"
              />
            </div>

            <div className="flex justify-evenly items-center gap-4 pt-2">
              <button
                type="submit"
                className="bg-teal-700 py-1 px-3 rounded-md text-white hover:border-teal-700 hover:text-teal-700 hover:bg-white hover:border"
              >
                SUBMIT
              </button>
            </div>
          </div>
          <span className="flex gap-1 justify-center">
            Don't have an account?{" "}
            <Button
              config={{
                type: "link",
                content: "Sign Up",
                url: `http://localhost:5173/auth/signup`,
              }}
            />{" "}
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
