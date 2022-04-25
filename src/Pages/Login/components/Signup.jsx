import React from "react";
import { render } from "react-dom";
import Login from "./Login";
import { FaEnvelope, FaLock, FaUserAlt } from "react-icons/fa";


const Signup = () => {
  
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  

  const getInput = () => {
    alert([email, username, password, confirmPassword]);
    render(<Login />, document.getElementById("root"));
  };

  
    const handleCancel = () => {
      render(<Login />, document.getElementById("root"));
    };

    

    return (
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-[#800020] ">

            <img
                className="logo object-scale-down w-40 h-fit mb-4 cursor-pointer"
                src={require("../../../images/logo-dark.png")}
                alt="logo"
            />

            {/*Content*/}
            <div className="flex flex-col bg-[#F5F5DC] rounded-2xl shadow-md shadow-white w-100">
              <h1 className=" text-4xl font-bold text-black text-center mt-4">
                SIGNUP
              </h1>

              {/*Signup Form*/}
              <form className="-space-y p-6 justify-center">
                <div className="-space-y-px ">
                  <div className="flex relative h-48px group justify-center items-center">
                    <label htmlFor="email" className="sr-only ">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      className=" flex h-48px w-full px-3 py-3 pr-10 placeholder-gray-600 text-black text-18px flex-none border-2 border-gray-300 rounded focus:border-gray-400 outline-none mb-4"
                      required
                    ></input>
                    <span className="flex absolute right-0 bg-transparent rounded text-base text-gray-600 mb-4 p-2">
                      <FaEnvelope className="text-black" />
                    </span>
                  </div>

                  <div className="flex relative  h-48px group justify-center items-center">
                    <label htmlFor="username" className="sr-only ">
                      Username
                    </label>
                    <input
                      type="username"
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
                      className="flex h-48px w-full px-3 py-3 pr-10 placeholder-gray-600 text-black text-18px flex-none border-2 border-gray-300focus:border-gray-400 outline-none mt-4"
                      required
                    ></input>
                    <span className="flex absolute right-0 bg-transparent rounded text-base text-gray-600 -mb-4 p-2">
                      <FaLock className="text-black" />
                    </span>
                  </div>

                  <div className="flex relative h-48px group justify-center items-center">
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="confirm-password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm Password..."
                      className="flex h-48px w-full px-3 py-3 pr-10 placeholder-gray-600 text-black text-18px flex-none border-2 border-gray-300 rounded focus:border-gray-400 outline-none mt-4"
                      required
                    ></input>
                    <span className="flex absolute right-0 bg-transparent rounded text-base text-gray-600 -mb-4 p-2">
                      <FaLock className="text-black" />
                    </span>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      className="w-full justify-center my-2 text-white bg-[#2F2440] hover:bg-[#800020] hover:text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center"
                      onClick={getInput}
                    >
                      Signup
                    </button>
                    <button
                      type="button"
                      className="w-full justify-center my-2 text-white bg-[#FF2511] hover:bg-[#800020] hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
       
    );
}
  

export default Signup;
