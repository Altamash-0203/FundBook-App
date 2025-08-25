import { Mail, Phone } from "lucide-react";
import React from "react";

function Footer(){



    return(
       <div className="h-40">
        <div className="bg-black  flex justify-between flex-wrap list-none text-white ">
            <div className="list-none">
                 <img src="/FundBookLogo.png" className="w-40 h-30 animate-pulse  " alt="" />
                  <p className=""> Head Office, Rajajinagar<br />
                Bengaluru, Karnataka, India</p>
                 <li>Contact No:91456546946</li>
                    <li>Mail:fundbook@gmail.com</li>
                    <li>Telephone:166646465</li>
            </div>
            <div className="mt-10">
                <li>Home</li>
                <li>Browse Fundraisers</li>
                <li>Login</li>
                <li>Signup</li>
                </div>

                <div className="flex gap-3 mt-10">
                    <img className="w-7 h-7 " src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="" />
                    <img className="w-7 h-7 " src="https://cdn-icons-png.flaticon.com/128/3670/3670147.png" alt="" />
                    <img className="w-7 h-7 " src="https://cdn-icons-png.flaticon.com/128/145/145802.png" alt="" />
                    <img className="w-7 h-7 " src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt="" />
              
                </div>
            
        </div>
         
       </div>
    )
}

export default Footer