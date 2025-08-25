import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  let status=localStorage.getItem("status")
  

  return (
    <nav className="bg-white shadow-md px-4 py-2">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <img className="h-16 animate-pulse" src="/FundBookLogo.png" alt="FundBook Logo" />
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu (Desktop) */}
        <div className="hidden md:flex list-none items-center gap-8">
          <Link style={{textDecoration:"none"}} to="/"><li className="bg-black text-white p-2 rounded">Home</li></Link>
          <Link style={{textDecoration:"none"}} to="/browsefunds" className="bg-black text-white p-2 rounded">Fundraisers</Link>
         <Link style={{textDecoration:"none"}} to="/createfund" className="bg-black text-white p-2 rounded">Create Fundraiser</Link>
        { !status &&<Link to="/signup" style={{textDecoration:"none"}} className="bg-green-500 text-white p-2 rounded">Signup</Link>}
        </div>
      </div>

      {/* Menu (Mobile Dropdown) */}
      {isOpen && (
        <div className="md:hidden  mt-4 space-y-4 ">
          <ul className="p-2 flex flex-col w-40 space-y-2 ">
             <Link style={{textDecoration:"none"}}  to="/" className="bg-black text-white p-2 rounded">Home</Link> <br />
          <Link style={{textDecoration:"none"}}  to="/browsefunds" className="bg-black text-white p-2 rounded">Fundraisers</Link> <br />
          <Link style={{textDecoration:"none"}} to="/createfund" className="bg-black text-white p-2 rounded">Create Fundraiser</Link> <br />
          </ul>
          {!status && <Link style={{textDecoration:"none"}} to="/signup" className="bg-green-500 text-white p-2 rounded text-center">Signup</Link>}
         
        </div>
      )}
    </nav>
  );
}

export default Navbar;
