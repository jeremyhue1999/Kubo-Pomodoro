import React from "react";
import { render } from "react-dom";
import Login from "./Login";
import ActivitiesPage from "../../Activities/activities-page";

class VerifyCode extends React.Component {
  render() {
    const handleCancel = () => {
      render(<Login />, document.getElementById("root"));
    };

    const handleVerify = () => {
      render(<ActivitiesPage />, document.getElementById("root"));
    };

    return (
      <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none ">
        <div className="relative p-4 max-w-2xl h-auto md:w-full sm:w-min md:h-auto ">
          {/*Verify Code Header */}
          <div className="relative bg-white shadow-xl shadow-gray-600 dark:bg-[#EB3C27]">
            <div className="flex justify-center items-center p-5 rounded-t border-b dark:border-gray-600">
              <img
                className="logo object-cover w-40 h-fit"
                src={require("../../../images/logo-dark.png")}
              ></img>
            </div>

            {/*Content*/}
            <div className="flex flex-col bg-gray-300 ">
              <h1 className=" text-4xl font-bold text-black text-center mt-4">
                VERIFY CODE
              </h1>

              <form className="mt-4 justify-center -space-y p-4">
                <div className="rounded-md shadow-sm -space-y-px sm:m-auto md:mr-24 md:ml-24 pb-2">
                  <div>
                    <label for="email" class="sr-only">
                      Code
                    </label>
                    <input
                      type="text"
                      name="code"
                      id="verification-code"
                      placeholder="Code"
                      className="flex h-48px w-full px-3 py-3 pr-10 placeholder-gray-600 text-black text-18px flex-none border border-transparent focus:border-gray-400 outline-none "
                      required
                    ></input>
                  </div>

                  <div>
                    <button
                      type="button"
                      id="verify-login"
                      className="w-full justify-center my-2 text-white bg-[#087830] hover:bg-white hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mt-6 mb-2"
                      onClick={handleVerify}
                    >
                      Verify
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

export default VerifyCode;
