import React from 'react'

function Homepage() {


    return (

        <div className=" relative h-screen ">
            <img src="https://cdn.pixabay.com/photo/2017/11/12/21/24/house-2943878_1280.jpg" alt="image" className=" w-full h-full object-cover  absolute inset-0" />

            <div className="relative z-10 ">
                <nav >
                    <ul className=" text-white flex justify-center text-xl list-none gap-10 p-6">
                        <li className=" hover:text-gray-200">About company</li>
                        <li className=" hover:text-gray-200">Featured places</li>
                        <li className=" hover:text-gray-200">Services</li>
                        <li className=" hover:text-gray-200">Rent House</li>
                        <li className=" hover:text-gray-200">Testimonials</li>
                    </ul>
                </nav>
            </div>
            <div  className="flex justify-end relative mt-10 ">
                <button className="border ">Get A QOUTE</button>
                </div>


        </div>



    )
}

export default Homepage