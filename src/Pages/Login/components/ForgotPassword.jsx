import React from "react";
import { render } from "react-dom";
import Login from "./Login";
import { FaEnvelope } from "react-icons/fa";

class ForgotPassword extends React.Component {
  render() {
    const handleCancel = () => {
      render(<Login />, document.getElementById("root"));
    };

    const handleSendCode = () => {
      render(<Login />, document.getElementById("root"));
    };

    return (
      <div className="flex flex-col flex-wrap items-center justify-center md:w-screen h-screen bg-[#800020]">
            <img
                className="logo object-cover w-40 h-fit mb-4 cursor-pointer"
                src={require("../../../images/logo-dark.png")}
                alt="logo"
            />

            {/*Content*/}
            <div className="flex flex-col bg-white rounded-2xl shadow-md shadow-white w-auto p-2">
              <h1 className=" text-4xl font-bold text-black text-center mt-4">
                FORGOT PASSWORD
              </h1>

              <form className="pt-6 justify-center -space-y">
                <div className="rounded-md shadow-sm -space-y-px mr-12 ml-12 pb-4">
                  <div className="flex relative  h-48px group justify-center items-center">
                    <label htmlFor="email" className="sr-only ">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      className=" flex h-48px w-full px-3 py-3 pr-10 placeholder-gray-600 text-black text-18px flex-none border-2 border-gray-300 rounded focus:border-gray-400 outline-none mb-4"
                      required
                    ></input>
                    <span className="flex absolute right-0 bg-transparent rounded text-base text-gray-600 mb-4 p-2">
                      <FaEnvelope className="text-black" />
                    </span>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="w-full justify-center my-2 text-white bg-[#087830] hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55  mb-2 "
                      onClick={handleSendCode}
                    >
                      Send Code
                    </button>
                    <button
                      type="button"
                      className="w-full justify-center my-2 text-white bg-[#EB3C27] hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55  mb-2"
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
}

export default ForgotPassword;
