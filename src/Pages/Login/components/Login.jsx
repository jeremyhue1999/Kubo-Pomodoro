import React from "react";
import { render } from "react-dom";
import Signup from "./Signup.jsx";
import ForgotPassword from "./ForgotPassword.jsx";
import VerifyEmail from "./VerifyEmail.jsx";
import { FaUserAlt, FaLock } from "react-icons/fa";

const Login = () => {
  
  const [
    username,
    setUsername,
   ] = React.useState("");

  const [password, setPassword] = React.useState("")
  
 
    const getInput = () => {
    alert([username,password]);
    render(<VerifyEmail/>, document.getElementById("root"));
   
} 

    const handleSignup = () => {
      render(<Signup />, document.getElementById("root"));
    };

    const handleForgotPassword = () => {
      render(<ForgotPassword />, document.getElementById("root"));
    };

    return (
    
        <div className="flex flex-col flex-wrap items-center justify-center w-screen h-screen bg-slate-800">
          
            <img
                className="logo object-scale-down w-40 h-fit mb-4 cursor-pointer"
                src={require("../../../images/logo-dark.png")}
                alt="logo"
            />
          
            {/*Content*/}
            <div className="flex flex-col bg-white shadow-md text-slate-800 shadow-white w-100">
        
              <h1 className=" text-4xl font-bold  text-center mt-4">
                LOGIN
              </h1>

              {/*Login Form*/}
              <form className="mt-4 -space-y">
                <div className="rounded-md shadow-sm -space-y-px mr-12 ml-12">
                  <div className="flex relative  h-48px group justify-center items-center">
                    <label htmlFor="username" className="sr-only ">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Username"
                      className=" flex h-48px w-full px-3 py-3 pr-10 placeholder-gray-600 text-black text-18px flex-none border-2 border-gray-300 rounded focus:border-gray-400 outline-none "
                      required
                    ></input>
                    <span className="flex absolute right-0 bg-transparent rounded text-base text-gray-600 p-2">
                      <FaUserAlt className="text-black" />
                    </span>
                  </div>

                  <div className="flex relative  h-48px group justify-center items-center">
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password..."
                      className="flex h-48px w-full px-3 py-3 pr-10 placeholder-gray-600 text-black text-18px flex-none border-2 border-gray-300 focus:border-gray-400 outline-none mt-4"
                      required
                    ></input>
                    <span className="flex absolute right-0 bg-transparent rounded text-base text-gray-600 -mb-4 p-2">
                      <FaLock className="text-black" />
                    </span>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="w-full justify-center my-2 text-white bg-orange-500 hover:bg-slate-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55  mt-4 mb-2"
                      onClick={getInput}
                    >
                      Login
                    </button>
                    <button
                      type="button"
                      className="w-full justify-center my-2 text-white bg-orange-500 hover:bg-slate-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                    >
                      <svg
                        className="w-4 h-4 mr-2 -ml-1"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="google"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 488 512"
                      >
                        <path
                          fill="currentColor"
                          d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                        ></path>
                      </svg>
                      Sign in with Google
                    </button>
                  </div>

                  <div className="text-md text-center">
                    <button
                      className="font-medium hover:underline "
                      onClick={handleForgotPassword}
                    >
                      Forgot Password?
                    </button>
                  </div>

                  <div className="pb-4 ">
                    <h3 className=" mt-4 text-md text-center">
                      Don't have an Account?
                    </h3>
                    <button
                      type="button"
                      id="signup-button"
                      className="w-full justify-center my-2 text-white bg-orange-500 hover:bg-slate-800 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55  mb-2"
                      onClick={handleSignup}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          
        </div>
      
    );
  
}

export default Login;