import React from "react";
import { render } from "react-dom";
import Login from "./Login";
import Signup from "./Signup";
import { FaUserAlt, FaLock } from "react-icons/fa";

class ChangePassword extends React.Component {
  render() {
    const handleChangePassword = () => {
      render(<Login />, document.getElementById("root"));
    };

    const handleCancel = () => {
      render(<Signup />, document.getElementById("root"));
    };
    return (
      <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none">
        <div className="relative p-4 max-w-2xl h-auto md:w-full sm:w-min md:h-auto">
          <div className="relative bg-white shadow-xl shadow-gray-600 dark:bg-[#EB3C27]">
            {/*Change Password Header*/}
            <div className="flex justify-center items-center p-2 rounded-t border-b dark:border-gray-600">
              <img
                className="logo object-cover w-80 h-fit"
                src={require("../../../images/logo-dark.png")}
                alt="logo"
              ></img>
            </div>

            {/*Content*/}
            <div className="flex flex-col bg-gray-300">
              <h1 className=" text-4xl font-bold text-black text-center mt-4">
                CHANGE PASSWORD
              </h1>

              <form className="mt-4 justify-center -space-y p-4">
                <div className="rounded-md shadow-sm -space-y-px pb-4 sm:mr-auto md:mr-24 md:ml-24">
                  <div className="flex relative  h-48px group justify-center items-center">
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password-new"
                      placeholder="New Password..."
                      className="flex h-48px w-full px-3 py-3 pr-10 placeholder-gray-600 text-black text-18px flex-none border border-transparent focus:border-gray-400 outline-none mt-4"
                      required
                    ></input>
                    <span className="flex absolute right-0 bg-transparent rounded text-base text-gray-600 -mb-4 p-2">
                      <FaLock className="text-black" />
                    </span>
                  </div>

                  <div className="flex relative  h-48px group justify-center items-center">
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password-new-confirm"
                      placeholder="Confirm New Password..."
                      className="flex h-48px w-full px-3 py-3 pr-10 placeholder-gray-600 text-black text-18px flex-none border border-transparent focus:border-gray-400 outline-none mt-4"
                      required
                    ></input>
                    <span className="flex absolute right-0 bg-transparent rounded text-base text-gray-600 -mb-4 p-2">
                      <FaLock className="text-black" />
                    </span>
                  </div>

                  <div>
                    <button
                      type="button"
                      id="verify-login"
                      className="w-full justify-center my-2 text-white bg-[#087830] hover:bg-white hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mt-6 mb-2"
                      onClick={handleChangePassword}
                    >
                      Change Password
                    </button>
                    <button
                      type="button"
                      id="cancel-login"
                      className="w-full justify-center my-2 text-white bg-[#EB3C27] border-white hover:bg-white hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55  mb-2"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangePassword;
