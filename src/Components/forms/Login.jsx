import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

function Login(){
 
    const [mail,setmail]=useState("")
    const [pass,setpass]=useState("")
    const navigate=useNavigate()


    async function Checklogin() {
        if(!mail ||!pass) return alert("please enter detail carefully")

    
    try{

        await signInWithEmailAndPassword(auth,mail,pass)
        confirm("Login Succefull✔")
        localStorage.setItem("status",true)
        navigate("/")

    }

    catch(err){
        alert(err.message)
    }
}


    return(
        <div className="border-1 h-screen flex flex-col justify-center items-center  ">

            <div className="border-1 text-center  w-50 rounded-xl shadow-xl shadow-cyan-600 ">
                <img src="/FundBookLogo.png" className="w-30 h-30 " alt="" />
                 <p className="text-l font-bold ">LOGIN<br />
                  <span className="tracking-tighter font-extrabold text-cyan-500">
            ________________
          </span>
                 </p>
              
               <input type="text"
                 className="border-1 text-center text-2xl w-70 p-1  mt-2"
                 placeholder="Enter Your Emal"
                 onChange={(e)=>{setmail(e.target.value)}}
                 /> <br />
              
               <input type="text"
                 className="border-1 text-center text-2xl w-70 p-1  mt-2"
                 placeholder="Create a Password"
                 onChange={(e)=>{setpass(e.target.value)}}
                 /> <br />
              
                
                <button onClick={Checklogin} className="border-1 text-center text-2xl w-70 p-1 bg-blue-500 text-white mt-5 rounded">
                    Login </button>
               

               <p className="text-l font-extralight "> I don't have account ?<a href="#">Signup</a> <br />
                  <span className="tracking-tighter font-extrabold text-cyan-500">
            ________________
          </span>
                 </p>

            </div>
        </div>
    )


}


export default Login