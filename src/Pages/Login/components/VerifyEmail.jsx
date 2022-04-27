import React from "react";
import { render } from "react-dom";
import Login from "./Login";
import ActivitiesPage from "../../Activities/activities-page";

const VerifyEmail = () => {
  
    const handleCancel = () => {
      render(<Login />, document.getElementById("root"));
    };

    const handleVerify = () => {
      render(<ActivitiesPage />, document.getElementById("root"));
    };

    return (
      <div className="flex flex-col flex-wrap items-center justify-center md:w-screen h-screen bg-slate-800">
            <img
                className="logo object-cover w-40 h-fit mb-4 cursor-pointer"
                src={require("../../../images/logo-dark.png")}
                alt="logo"
            />

            {/*Content*/}
            <div className="flex flex-col bg-white shadow-md shadow-white text-slate-800 w-100 p-2">
              <h1 className=" text-4xl font-bold mt-4">
                EMAIL VERIFICATION
              </h1>
              <h1 className=" text-sm text-center mt-4">
                Please Enter your Email Address Below
              </h1>

              <form className="justify-center w-full p-6">
                <div className=" ">
                  <div>
                    <label htmlFor="code" class="sr-only">
                      Code
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      className="flex h-48px w-full px-3 py-3 pr-10 placeholder-gray-600 text-black text-18px flex-none border-2 border-gray-300 rounded focus:border-gray-400 outline-none "
                      required
                    ></input>
                  </div>

                  <div>
                    <button
                      type="button"
                      id="verify-login"
                      className="w-full justify-center my-2 text-white bg-orange-500 hover:bg-black hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mt-6 mb-2"
                      onClick={handleVerify}
                    >
                      Verify
                    </button>
                    <button
                      type="button"
                      id="cancel-login"
                      className="w-full justify-center my-2 text-white bg-red-500 hover:bg-black hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
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

export default VerifyEmail;
