import React from "react";
import { render } from "react-dom";
import GeneralSettings from "./GeneralSettings";

export default function UpdatePasswordPopup(){
    const handleClose = () => {
        render(<GeneralSettings />, document.getElementById("root"));
    }

    return (
        <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none">
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                {/*Popup Component*/}
                <div className="relative bg-white rounded-lg shadow dark:bg-[#EB3C27]">

                    {/*Popup Header*/}
                    <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-white lg:text-2xl dark:text-white">
                            General Settings
                        </h3>
                        <button type="button" className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="defaultModal" onClick={handleClose}>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>

                    {/*Popup Content*/}
                    <div className="flex flex-col justify-center  p-5 bg-gray-300">


                        {/*Password Settings*/}
                        <div>
                            <form className="mt-4 space-y ">
                                <p className="text-xl text-left leading-relaxed">Password Settings</p>
                                <div>
                                <label for="password" className="sr-only">Password</label>
                                <input type="password" 
                                name="password" 
                                id="password" 
                                placeholder="Current Password"
                                className="w-full appearance-none rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:z-10 sm:text-sm my-2"
                                required></input>
                              </div>
                              <div>
                                <label for="password" className="sr-only">Password</label>
                                <input type="password" 
                                name="password" 
                                id="new-password" 
                                placeholder="New Password"
                                className="w-full appearance-none rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:z-10 sm:text-sm my-2"
                                required></input>
                              </div>
                            
                              <div>
                                <label for="password" className="sr-only">Password</label>
                                <input type="password" 
                                name="password" 
                                id="confirm-new-password" 
                                placeholder="Confirm New Password"
                                className="w-full appearance-none rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:z-10 sm:text-sm my-2"
                                required></input>
                              </div>
              
              
                                
                            </form>
                            <div className="relative mt-4">
                                <button className="w-full justify-center my-2 text-white bg-black hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55">
                                    Save
                                </button>
                                <button className="w-full justify-center my-2 text-white bg-gray-600 hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55" onClick={handleClose}>
                                    Cancel
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}