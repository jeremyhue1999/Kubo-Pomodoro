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
      <div className="flex flex-col items-center justify-center w-full h-screen bg-slate-800">  

            <img
                className="logo object-scale-down w-40 h-fit mb-4 cursor-pointer"
                src={require("../../../images/logo-dark.png")}
                alt="logo"
            />

            {/*Content*/}
            <div className="flex flex-col items-center text-white border-t-4 w-max">
              <h1 className=" text-4xl font-bold text-center mt-4">
                SIGNUP
              </h1>

              {/*Signup Form*/}
              <form className="-space-y p-6 justify-center flex-wrap ">
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
                      className=" flex w-full px-3 py-3  bg-transparent border-b-2 text-white placeholder-gray-300 flex-none mb-4"
                      required
                    ></input>
                    <span className="flex absolute right-0 bg-transparent rounded text-base text-gray-600 mb-4 p-2">
                      <FaEnvelope className="text-white" />
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
                      className="flex w-full px-3 py-3  bg-transparent border-b-2 text-white placeholder-gray-300 flex-none "
                      required
                    ></input>
                    <span className="flex absolute right-0 bg-transparent rounded text-base text-gray-600 p-2">
                      <FaUserAlt className="text-white" />
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
                      className="flex w-full px-3 py-3  bg-transparent border-b-2 text-white placeholder-gray-300 flex-none mt-4"
                      required
                    ></input>
                    <span className="flex absolute right-0 bg-transparent rounded text-base text-gray-600 -mb-4 p-2">
                      <FaLock className="text-white" />
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
                      placeholder="Confirm Password"
                      className="flex w-full px-3 py-3  bg-transparent border-b-2 text-white placeholder-gray-300 flex-none mt-4"
                      required
                    ></input>
                    <span className="flex absolute right-0 bg-transparent rounded text-base text-gray-600 -mb-4 p-2">
                      <FaLock className="text-white" />
                    </span>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      className="w-full justify-center my-2 text-white bg-orange-500 hover:bg-white hover:text-slate-800  font-medium rounded-3xl text-sm px-5 py-2.5 text-center items-center"
                      onClick={getInput}
                    >
                      Signup
                    </button>
                    <button
                      type="button"
                      className="w-full justify-center my-2 text-white bg-red-500 hover:bg-white hover:text-slate-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center"
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
