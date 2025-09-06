import React from 'react'

function Login() {
    return (

        <div className="grid p-10 gap-5 grid-cols-3 bg-c border-2 bg-cyan-900 h-200 w-full ">
            <div className="border-1 border-yellow-400 *:text-center text-xl font-serif bg-gray-200 hover:text-fuchsia-800 rounded-sm overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa quaerat fuga repellat, laborum, atque repellendus doloremque impedit ad totam consequuntur fugiat error ab voluptate ullam. Dolores odit natus reiciendis.</div>

            <div className="border-1 border-yellow-400 text-center  text-xl font-serif bg-gray-200 hover:text-fuchsia-800 rounded-sm overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa quaerat fuga repellat, laborum, atque repellendus doloremque impedit ad totam consequuntur fugiat error ab voluptate ullam. Dolores odit natus reiciendis.</div>

            <div className="border-1 border-yellow-400 text-center text-xl font-serif bg-gray-200 hover:text-fuchsia-800 rounded-sm overflow-hidden " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa quaerat fuga repellat, laborum, atque repellendus doloremque impedit ad totam consequuntur fugiat error ab voluptate ullam. Dolores odit natus reiciendis.</div>


            <div className="bg-gray-200 p-10 border-1 border-yellow-400 rounded-2xl items-center">
                <div className='flex-col grid gap-4 overflow-hidden '>
                    <h1 className="text-2xl text-center font-serif  " >Login Page</h1>

                    <input type="text" id="username" placeholder='Username'
                        className="border-2 font-serif w-70 ms-25" />

                    <input type="password" id="username" placeholder='Password'
                        className="border-2 font-serif w-70 ms-25" />

                    <button className=" font-serif hover:bg-blue-500 rounded-lg w-25 h-10 bg-green-600  cursor-pointer ms-48 ">click Me</button>
                </div>
            </div>

        </div>
    )
}

export default Login