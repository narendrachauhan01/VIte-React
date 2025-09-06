import React from 'react'
export default function Card() {
  return (

    <div className="bg-[linear-gradient(90deg,rgba(190,215,240,1)0%,rgba(230,200,210,1)100%,rgba(184,164,201,1)100%)] h-screen">

      <div className=" flex  justify-center items-center cursor-pointer flex-col  ">
        <div className="rounded-lg bg-gray-50 p-5 w-120 mt-50 shadow-lg shadow-gray-400 ">

          <div className=" w-14 bg-blue-100  flex items-center rounded-sm">
            <img src="https://img.icons8.com/?size=100&id=l7Tz7esmy3h5&format=png&color=228BE6" alt="" className="h-[30px] mx-[12px] " />

            <div className="flex flex-col ml-5">
              <span className="font-normal text-xl ">8/240</span>
              <span className="whitespace-nowrap text-gray-500">Daily Points</span>
            </div>
          </div>
        </div>

        {/* -------- 2nd Notification --------*/}

        <div className="rounded-lg bg-gray-50 p-5 w-120 shadow-lg mt-8 shadow-gray-400 ">

          <div className=" w-14 bg-blue-100  flex items-center rounded-sm">
            <img src="https://img.icons8.com/?size=100&id=11642&format=png&color=228BE6" alt="" className="h-[30px] mx-[12px] " />

            <div className="flex flex-col ml-5">
              <span className="font-normal text-xl ">Notifications</span>
              <span className="whitespace-nowrap text-gray-500">Receive via email and app</span>
            </div>
          </div>
        </div>

        {/* -------- 3nd Save on history --------*/}

        <div className="rounded-lg bg-gray-50 p-5 w-120 shadow-lg mt-8 shadow-gray-400 ">

          <div className=" w-14 h-14 bg-blue-100  flex items-center rounded-sm">
            <img src="https://img.icons8.com/?size=100&id=16171&format=png&color=228BE6" alt="" className="h-[30px] mx-[12px] " />

            <div className="flex flex-col ml-5">
              <span className="font-normal text-xl whitespace-nowrap">Save on history</span>
            </div>
          </div>
        </div>

        {/* -------- 4nd Orders Placed --------*/}



        <div className="rounded-lg bg-gray-50 p-5 w-120 shadow-lg mt-8 shadow-gray-400 ">

          <div className=" w-14 bg-blue-100  flex items-center rounded-sm">
            <img src="https://img.icons8.com/?size=100&id=114632&format=png&color=228BE6" alt="" className="h-[30px] mx-[12px] " />

            <div className="flex flex-col ml-5">
              <span className="font-normal text-xl whitespace-nowrap">Your orders</span>
              <span className="whitespace-nowrap text-gray-500">All the orders you have placed</span>
            </div>
          </div>
        </div>

        {/* -------- 5nd App Update --------*/}


        <div className="rounded-lg bg-gray-50 p-5 w-120 shadow-lg mt-8 shadow-gray-400 ">

          <div className=" w-14 h-14 bg-blue-100  flex items-center rounded-sm">
            <img src="https://img.icons8.com/?size=100&id=11682&format=png&color=228BE6" alt="" className="h-[30px] mx-[12px] " />

            <div className="flex flex-col ml-5">
                <span className="font-normal text-xl whitespace-nowrap">App update available</span>
            </div>
          </div>
        </div>





      </div>

    </div>
  )
}   
