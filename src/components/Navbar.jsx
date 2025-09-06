import React from 'react'

function Navbar() {
    return (
        <div>
            <header className="bg-gray-500 text-white p-4 flex justify-between items-end">
                <h1 className="text-xl font-bold bottom">Addweb Solution</h1>
                
            <ul className="flex justify-end gap-6 list-none  ">
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contect</li>
            </ul>
            </header>

        </div>
    )
}

export default Navbar