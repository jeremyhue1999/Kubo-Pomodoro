import React from "react";

export default function SoundSettings({showSounds, onClose}) {

    if(!showSounds) {
        return null
    }

    return (
        <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none">
            <div className="relative p-4 w-min max-w-2xl h-full md:h-auto">
                {/*Popup Component*/}
                <div className="relative bg-white rounded-lg shadow dark:bg-[#EB3C27]">

                    {/*Popup Header*/}
                    <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-white lg:text-2xl dark:text-white">
                            Sounds and Notifications
                        </h3>
                        <button type="button" className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="defaultModal" onClick={onClose}>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>

                    {/*Popup Content*/}
                    <div className="flex flex-col flex-wrap justify-center items-center p-5 bg-gray-300">
                        
                        {/*Enable/Disable Sound */}
                        <div className="flex flex-row gap-64 items-center">
                            <p className="text-md leading-relaxed">Enable Sound</p>
                            {/*Toggle Switch Container*/}
                            <div className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-[#EB3C27] rounded-full p-1 cursor-pointer">
                                {/* Toggle Switch */}
                                <div className = "bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform"></div>
                            </div>
                        </div>

                        {/*Sound Dropdown*/}
                        <div className="dropdown relative w-full ">
                            <button
                                className="dropdown-toggle px-6 py-2.5 bg-[#087830] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white  hover:text-black hover:shadow-lg  active:bg-[#EB3C27] active:shadow-lg active:text-white transition duration-150 ease-in-out flex justify-center whitespace-nowrap w-full mt-4"
                                type="button"
                                id="dropdown-sound-menu"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                >Sound
                                <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="caret-down"
                                className="w-2 ml-2"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                                >
                                <path
                                    fill="currentColor"
                                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                ></path>
                            </svg>
                            </button>
                        </div>

                        {/*Volume*/}
                        <div className="flex flex-col items-center justify-center w-full mt-4">
                            <label for="volumeRange" className="volume-label font-semibold mt-4">Volume</label>
                            <input type="range" className="volume-range mt-4 w-full" id="volumeRange" min="0" max="100" value="0" />
                        </div>



                        {/*Notifications*/}
                        <div className="flex gap-64 items-center mt-4">
                            <p className="text-base">Enable Notifications</p>
                            {/*Toggle Switch Container*/}
                            <div id="notification-toggle" className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-[#EB3C27] rounded-full p-1 cursor-pointer">
                                {/* Toggle Switch */}
                                <div className = "bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform"></div>
                            </div>
                        </div>

                        <div className="relative mt-4">
                            <button className="w-full justify-center my-2 text-white bg-black hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55">
                                Apply To Work Time
                            </button>
                            <button className="w-full justify-center my-2 text-white bg-black hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55">
                                Apply To Sort Break
                            </button>
                            <button className="w-full justify-center my-2 text-white bg-black hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55">
                                Apply To Long Break
                            </button>
                            <button className="w-full justify-center my-2 text-white bg-gray-600 hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55" onClick={onClose}>
                                Cancel
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

