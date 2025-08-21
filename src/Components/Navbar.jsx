import React from "react";
import { LogIn, Search } from 'lucide-react';

function Navbar(){


    return(
        <>
        
        <div className="flex justify-between items-center shadow-xs rounded-2xl mt-3 shadow-black">
               <div>
                <img  className="h-20 w-30 animate-bounce" src="public/FundBookLogo.png" alt="" />
               </div>
               <div className="flex list-none justify-between items-center gap-10">
                <li className="hover:underline cursor-pointer">Home</li>
                <li className="hover:underline cursor-pointer"> Fundraisers</li>
                <div  >
                    <input className="border text-center p-1  rounded-br-2xl rounded-tl-2xl " type="text" placeholder="Find FundRaiser"/>
                    <button className="border ml-2 p-1 w-30 hover:bg-gray-200 rounded  ">Search</button>
                </div>
               </div>
               <div>
                <button className="bg-green-500 text-white p-1 rounded mr-10">Signup</button>
               </div>
               
        </div>

        </>
    )
}

export default Navbar