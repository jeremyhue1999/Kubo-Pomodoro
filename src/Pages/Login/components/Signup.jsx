import React from "react";
import {render} from 'react-dom';
import Login from "./Login";
import ChangePassword from "./ChangePassword";
import {FaEnvelope, FaLock, FaUserAlt} from "react-icons/fa";

  class Signup extends React.Component{
    
    render () {

    
        const handleCancel = () => {
        render(<Login />, document.getElementById('root'));
        }

        const handleSignup = () => {
          render(<ChangePassword/>, document.getElementById('root'));
        }
      
        return(
          <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none">
              <div className="relative p-4 max-w-2xl h-auto md:w-full sm:w-min md:h-auto">
                  
                  {/*Signup Header */}
                  <div className="relative bg-white shadow-xl shadow-gray-600 dark:bg-[#EB3C27]">

                      {/*Signup Header*/}
                      <div className="flex justify-center items-center p-5  dark:border-gray-600">
                        <img className="logo object-cover w-40 h-fit" src={require("../images/logo-dark.png")} alt="logo"></img>
                      </div>

                      {/*Content*/}
                      <div className="flex flex-col bg-gray-300">
                        
                        <h1 className=" text-4xl font-bold text-black text-center mt-4">
                          SIGNUP
                        </h1>

                        {/*Signup Form*/}
                        <form className='mt-4 -space-y sm:p-6 justify-center'>
                          <div className="rounded-md shadow-sm -space-y-px md:mr-12 md:ml-12 sm:m-auto pb-4">

                              <div className="flex relative  h-48px group justify-center items-center">
                                <label for="email" class="sr-only ">Email</label>
                                <input type="email" 
                                name="email" 
                                id="email" 
                                placeholder="Email Address"
                                className=" flex h-48px w-full px-3 py-3 pr-10 placeholder-gray-600 text-black text-18px flex-none border border-transparent rounded focus:border-gray-400 outline-none mb-4" 
                                required></input>
                                <span class="flex absolute right-0 bg-transparent rounded text-base text-gray-600 mb-4 p-2">
                                  <FaEnvelope className="text-black" />
                                </span>
                              </div>
              
                              <div className="flex relative  h-48px group justify-center items-center">
                                <label for="username" class="sr-only ">Username</label>
                                <input type="username" 
                                name="username" 
                                id="username" 
                                placeholder="Username"
                                className=" flex h-48px w-full px-3 py-3 pr-10 placeholder-gray-600 text-black text-18px flex-none border border-transparent rounded focus:border-gray-400 outline-none " 
                                required></input>
                                <span class="flex absolute right-0 bg-transparent rounded text-base text-gray-600 p-2">
                                  <FaUserAlt className="text-black" />
                                </span>
                              </div>
              
                              <div className="flex relative  h-48px group justify-center items-center">
                                <label for="password" className="sr-only">Password</label>
                                <input type="password" 
                                name="password" 
                                id="password" 
                                placeholder="Password..."
                                className="flex h-48px w-full px-3 py-3 pr-10 placeholder-gray-600 text-black text-18px flex-none border border-transparent focus:border-gray-400 outline-none mt-4"
                                required></input>
                                <span class="flex absolute right-0 bg-transparent rounded text-base text-gray-600 -mb-4 p-2">
                                  < FaLock className="text-black" />
                                </span>
                              </div>
              
                              <div className="flex relative  h-48px group justify-center items-center">
                                <label for="password" className="sr-only">Password</label>
                                <input type="password" 
                                name="password" 
                                id="confirm-password" 
                                placeholder="Password..."
                                className="flex h-48px w-full px-3 py-3 pr-10 placeholder-gray-600 text-black text-18px flex-none border border-transparent focus:border-gray-400 outline-none mt-4"
                                required></input>
                                <span class="flex absolute right-0 bg-transparent rounded text-base text-gray-600 -mb-4 p-2">
                                  < FaLock className="text-black" />
                                </span>
                              </div>
              
                              <div className="pt-4">
                                <button type="button" className="w-full justify-center my-2 text-white bg-[#087830] hover:bg-white hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55" onClick={handleSignup}>
                                    Signup
                                </button>
                                <button type="button" className="w-full justify-center my-2 text-white bg-[#EB3C27] hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55" onClick={handleCancel}>
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

  export default Signup;