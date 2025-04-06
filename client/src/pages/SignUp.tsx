import React from "react";
import { useAuth } from "../context/authContext.tsx";
import Button from "../ui/Button.tsx";

function SignUp() {
  async function handleSubmit(e) {
    e.preventDefault();
    // const name = username.value;
    // console.log(name);
    const data = new FormData(e.target);
    const email: string = data.get("email");
    const name: string = data.get("username");
    const password: string = data.get("password");
    const confirmPass = data.get("confirmPassword");

    if (password != confirmPass) {
      throw new Error("Passwords dont match!");
    }

    const body = { name, email, password };

    const reqOptions: any = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    const res = await fetch("http://localhost:5000/auth/signup", reqOptions);

    if (res.status == 200) console.log("Mission successful");
  }
  return (
    <div className="bg-slate-50 h-screen">
      <div className="flex items-center justify-center  max-h-fit md:h-fit">
        <form
          className="rounded-md shadow-xl mx-auto mt-4 py-4 bg-white text-black min-h-min flex flex-col items-center justify-center gap-2 w-1/4 max-h-2  md:w-1/3 text-[0.5rem] md:mt-8"
          onSubmit={handleSubmit}
          method="POST"
        >
          <legend className="text-lg text-teal-700 font-semibold">
            Sign Up
          </legend>
          <div className="w-2/3 flex flex-col gap-2 font-semibold">
            <div className="flex flex-col gap-1">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                maxLength={10}
                required
                className="rounded-sm border-solid border-slate-300 border py-0.5 font-normal"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email ID</label>
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

            <div className="flex flex-col gap-1">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="text"
                name="confirmPassword"
                id="confirmPass"
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
            Already have an account?{" "}
            <Button
              config={{
                type: "link",
                content: "Login",
                url: `http://localhost:5173/auth/login`,
              }}
            />{" "}
          </span>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
