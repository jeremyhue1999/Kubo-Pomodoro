import React from "react";
import {useState} from "react";
import UpdatePasswordPopup from "./UpdatePasswordPopup";

export default function GeneralSettings({ showGeneral, onClose }) {

    const [showUpdatePassword, setShowUpdatePassword] = useState(false);
    
    if (!showGeneral) {
        return null
    }

    return (
        <div className="min-w-screen h-screen animated fadeIn faster  fixed backdrop-blur-md left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none">
            <div className="relative p-4 w-max max-w-2xl h-full md:h-auto">
                {/*Popup Component*/}
                <div className="relative shadow-xl shadow-white bg-orange-500 ">

                    {/*Popup Header*/}
                    <div className="flex justify-between items-start p-5 gap-24 border-b border-white">
                        <h3 class="text-xl font-semibold text-white lg:text-2xl dark:text-white">
                            General Settings
                        </h3>
                        <button type="button" className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="defaultModal" onClick={onClose}>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>

                    {/*Popup Content*/}
                    <div className="flex flex-col flex-wrap justify-center  p-5 bg-slate-800">
                        
                        {/*Account Settings*/}
                        <div>
                            <form className="space-y text-white">
                                <p className="text-xl text-left leading-relaxed">Account Settings</p>
                                <div>
                                    <label htmlFor="username" className="sr-only ">Username</label>
                                    <input type="username" 
                                    name="username" 
                                    id="username" 
                                    placeholder="Username"
                                    className=" w-full appearance-none rounded-none relative block  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:z-10 sm:text-sm mt-2" 
                                    ></input>
                                </div>
                                <div>
                                    <label for="email" className="sr-only ">Email</label>
                                    <input type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="Email Address"
                                    className=" w-full appearance-none rounded-none relative block  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:z-10 sm:text-sm mt-2 mb-2" 
                                    ></input>
                                </div>
                                
                            </form>

                            <button className="w-full justify-center my-2 text-white bg-green-700 hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55" 
                            onClick={() => setShowUpdatePassword(true)} >
                            Update Password
                            </button>
                            <UpdatePasswordPopup
                                showUpdatePassword = {showUpdatePassword}
                                onClose={() => setShowUpdatePassword(false)}
                            />
                        </div>




                        

                        <div className="relative mt-4">
                            <button className="w-full justify-center my-2 text-white bg-green-700 hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55">
                                Save
                            </button>
                            <button className="w-full justify-center my-2 text-white bg-red-500  hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55" onClick={onClose}>
                                Cancel
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}