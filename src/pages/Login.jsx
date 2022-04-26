import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="w-screen h-screen bg-primary-500 flex justify-center items-center">
        <div className="w-full sm:[w-40%] md:w-[50%] lg:w-[50%] xl:w-[30%] h-[60%] bg-white flex flex-col p-6 justify-center items-center shadow-lg shadow-slate-400">
          <div className="w-full sm:w-3/5 flex flex-col justify-center items-center gap-8">
            <div className="w-full text-center text-4xl text-primary-500">LOGIN</div>
            <input
              className="w-full text-xl outline-none border-b border-primary-200 placeholder:text-primary-200 focus:text-2xl transition-all ease-in-out duration-300 p-2"
              type="email"
              placeholder="Email"
            />
            <input
              className="w-full text-xl outline-none border-b border-primary-200 placeholder:text-primary-200 focus:text-2xl transition-all ease-in-out duration-300 p-2"
              type="password"
              placeholder="Password"
            />
            <Link to="/member" className="bg-primary-500 text-white w-full p-3 hover:bg-primary-200 text-center">
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
