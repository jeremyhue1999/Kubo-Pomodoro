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
            <div className="flex flex-col text-white w-max border-t-4 p-2">
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
                      className="flex w-full px-3 py-3  bg-transparent border-b-2 text-white placeholder-gray-300 flex-none "
                      required
                    ></input>
                  </div>

                  <div>
                    <button
                      type="button"
                      id="verify-login"
                      className="w-full justify-center my-2 text-white bg-orange-500 hover:bg-white hover:text-black font-medium rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center mt-6 mb-2"
                      onClick={handleVerify}
                    >
                      Verify
                    </button>
                    <button
                      type="button"
                      id="cancel-login"
                      className="w-full justify-center my-2 text-white bg-red-500 hover:bg-white hover:text-slate-800  font-medium rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center"
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
