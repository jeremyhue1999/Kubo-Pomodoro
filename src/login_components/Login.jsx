import React from "react";
import { useNavigate } from "react-router-dom";
import {render} from 'react-dom';
import Signup from './Signup.jsx';
import ForgotPassword from "./ForgotPassword.jsx";
import VerifyCode from "./VerifyCode.jsx";
import {FaUserAlt, FaLock} from "react-icons/fa";



class Login extends React.Component{

    render(){

      const handleSignup = () => {
        render(<Signup />, document.getElementById('root'));
      }
  
      const handleForgotPassword = () => {
        render(<ForgotPassword />, document.getElementById('root'));
      }
  
      const login = () => {
        render(<VerifyCode />, document.getElementById('root'));
      }
    
      return (
        
        <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none">
              <div className="relative p-4 max-w-2xl h-auto md:w-full sm:w-min md:h-auto">
                  
                  {/*Login Header */}
                  <div className="relative bg-white shadow shadow-gray-600 dark:bg-[#EB3C27]">

                      {/*Login Header*/}
                      <div className="flex justify-center items-center p-5 dark:border-gray-600">
                        <img className="logo object-cover w-40 h-fit" src={require("../images/logo-dark.png")} alt="logo"></img>
                      </div>

                      {/*Content*/}
                      <div className="flex flex-col bg-gray-300">
                        
                        <h1 className=" text-4xl font-bold text-black text-center mt-4">
                          LOGIN 
                        </h1>

                        {/*Login Form*/}
                        <form className='mt-4 -space-y'>
                          <div className="rounded-md shadow-sm -space-y-px mr-12 ml-12">
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

                              <div>
                                <button type="button" className="w-full justify-center my-2 text-white bg-[#087830] hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55  mt-4 mb-2" onClick={login}>
                                    Login
                                </button>
                                <button type="button" className="w-full justify-center my-2 text-white bg-[#EB3C27] hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                    <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                                    Sign in with Google
                                </button>
                              </div>
                
                              <div className="text-md text-center">
                                < button className="font-medium text-black hover:underline "  onClick={handleForgotPassword}>
                                  Forgot Password?
                                </button >
                              </div>
                
                              <div className="pb-4 ">
                                <h3 className=' mt-4 text-md text-center text-black'>Don't have an Account?</h3>
                                <button type="button" id="signup-button" className="w-full justify-center my-2 text-white bg-[#087830] hover:bg-white hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55  mb-2" onClick={handleSignup}>
                                    Sign Up
                                </button>
                              </div>
                
                          </div>
                        </form>
                          

                      </div>
                  </div>
              </div>
          </div>
      );
      
    };

    
  }
  
 
  export default Login;