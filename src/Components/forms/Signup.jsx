import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { setDoc,doc } from "firebase/firestore";

function Signup(){
 
    const [mail,setmail]=useState("")
    const [name,setname]=useState("")
    const [pass,setpass]=useState("")
    const [checkpass,setcheckpass]=useState("")
    let navigate=useNavigate()


    async function CheckSignup(){
          if(!mail || !name ||!pass || !checkpass)
          {
            return alert("Plese Enter All details Carefully")
          }

          if(pass !=checkpass){
            return alert("Password Not Match")
          }

          
          try{
            const detail=await createUserWithEmailAndPassword(auth,mail,pass)
            const user=detail.user

            await setDoc(doc(db,"Users",user.uid),{
                name,
                Email:mail,
                uid:user.uid
            })
            confirm("Account is Creted Succefully")
            navigate("/login")
          }
          catch(err){
            alert(err.message)
          }
    }

    



    return(
        <div className="border-1 h-screen flex flex-col justify-center items-center  ">

            <div className="border-1 text-center  w-50 rounded-xl shadow-xl shadow-cyan-600 ">
                <img src="/FundBookLogo.png" className="w-30 h-30 " alt="" />
                 <p className="text-l font-bold ">SIGNUP <br />
                  <span className="tracking-tighter font-extrabold text-cyan-500">
            ________________
          </span>
                 </p>

                 <input type="text"
                 className="border-1 text-center text-2xl w-70 p-1 mt-1"
                 placeholder="Enter Your Name"
                 onChange={(e)=>{setname(e.target.value)}}
                 /> <br />
              
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
              
               <input type="text"
                 className="border-1 text-center text-2xl w-70 p-1   mt-2"
                 placeholder="Re-Enter Password"
                 onChange={(e)=>{setcheckpass(e.target.value)}}
                 /> <br />
                
                <button 
                className="border-1 text-center text-2xl w-70 p-1 bg-blue-500 text-white mt-5 rounded"
                onClick={CheckSignup}
                >
                   
                    Signup </button>
               

               <p className="text-l font-extralight "> Already have account ?
                <Link to="/login" className="text-cyan-600 underline">
                 Login</Link> <br />
                  <span className="tracking-tighter font-extrabold text-cyan-500">
            ________________
          </span>
                 </p>

            </div>
        </div>
    )


}


export default Signup