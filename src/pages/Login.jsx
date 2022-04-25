import React from "react";

export default function Login() {
  return (
    <>
      <div className="w-screen h-screen bg-primary-500 flex justify-center items-center">
        <div className="w-full sm:[w-40%] md:w-[50%] lg:w-[50%] xl:w-[30%] h-[60%] bg-white flex flex-col p-6 justify-center items-center">
          <div className="w-full sm:w-3/5 flex flex-col justify-center items-center gap-8">
            <div className="w-full text-center text-4xl">LOGIN</div>
            <input
              className="w-full text-xl outline-none border-b border-primary-200 placeholder:text-primary-200 focus:text-2xl transition-all ease-in-out duration-300 p-2"
              type="text"
              placeholder="Email"
            />
            <input
              className="w-full text-xl outline-none border-b border-primary-200 placeholder:text-primary-200 focus:text-2xl transition-all ease-in-out duration-300 p-2"
              type="text"
              placeholder="Password"
            />
            <button className="bg-primary-500 text-white w-full p-3 hover:bg-primary-200">LOGIN</button>
          </div>
        </div>
      </div>
    </>
  );
}
