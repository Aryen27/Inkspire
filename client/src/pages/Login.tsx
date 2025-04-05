import React, { useEffect } from "react";
import { redirect } from "react-router-dom";
import { useAuth } from "../components/authContext.tsx";

function Login() {
  let { user, login, logout, isAuthenticated } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const name = username.value;
    // console.log(name);
    const data = new FormData(e.target);
    const email: string = data.get("email");
    const password: string = data.get("password");

    const body = { email, password };
    console.log(body);

    const reqOptions: any = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      credentials: "include",
    };

    const res = await (await fetch("http://localhost:5000/auth/login", reqOptions)).text();
    if (res.success != true) {
      throw new Error(res.message);
    }
    console.log("Res: "+res);
  };

  return (
    <div className="bg-slate-50 h-screen">
      <div className="flex items-center justify-center  max-h-fit md:h-fit">
        <form
          className="rounded-md shadow-xl mx-auto mt-4 py-5 pb-8 bg-white text-black min-h-min flex flex-col items-center justify-center gap-2 w-1/4 max-h-2  md:w-1/3 text-[0.5rem] md:mt-8"
          onSubmit={handleSubmit}
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
                className="bg-teal-700 py-1 px-3 rounded-md text-white hover:grow"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
