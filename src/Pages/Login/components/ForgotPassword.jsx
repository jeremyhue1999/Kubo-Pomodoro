import React from "react";
import { render } from "react-dom";
import Login from "./Login";
import { FaEnvelope } from "react-icons/fa";

const ForgotPassword = () => {
 
    const handleCancel = () => {
      render(<Login />, document.getElementById("root"));
    };

    const handleSendCode = () => {
      render(<Login />, document.getElementById("root"));
    };

    return (
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-slate-800 ">

        <img
            className="logo object-scale-down w-40 h-fit mb-4 cursor-pointer"
            src={require("../../../images/logo-dark.png")}
            alt="logo"
        />

        {/*Content*/}
        <div className="flex flex-col text-white border-t-4  w-100"> 
              <h1 className=" text-4xl font-bold  text-center mt-4 mr-2 ml-2">
                FORGOT PASSWORD
              </h1>
              <form className=" justify-center-space-y">
                <div className="-space-y-px p-4">
                  <div className="flex relative  h-48px group justify-center items-center">
                    <label htmlFor="email" className="sr-only ">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      className=" flex w-full px-3 py-3  bg-transparent border-b-2 text-white placeholder-gray-300 flex-none mb-4"
                      required
                    ></input>
                    <span className="flex absolute right-0 bg-transparent rounded text-base text-gray-600 mb-4 p-2">
                      <FaEnvelope className="text-white" />
                    </span>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="w-full justify-center my-2 text-white bg-orange-500 hover:bg-white hover:text-slate-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center mb-2 "
                      onClick={handleSendCode}
                    >
                      Send Code
                    </button>
                    <button
                      type="button"
                      className="w-full justify-center my-2 text-white bg-red-500 hover:bg-white hover:text-slate-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center mb-2"
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

export default ForgotPassword;
