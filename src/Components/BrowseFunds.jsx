import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BrowseFunds(){
   
    const [Funds,setfunds]=useState([])
    const [load,setload]=useState(true)
    const [filter,setfilter]=useState([])
    const [find,setfind]=useState("")
let navigate=useNavigate()
    useEffect(()=>{

        async function FetchFunds(){
            try{
                let res= await axios.get("https://fundbook-app-default-rtdb.firebaseio.com/fundraisers.json")
                let data=res.data

                let dres= await axios.get("https://fundbook-app-default-rtdb.firebaseio.com/donations.json")
                let donationdata=dres.data


                if(data){
                    let list=Object.entries(data).map(([id,val])=>{
                        let donated=donationdata[id]
                        ?Object.values(donationdata[id])
                        :[]

                        let total=donated.reduce((s,d)=>s+Number(d.amount||0),0)

                        return{
                        id,
                        ...val,
                        total
                }})
                    setfunds(list)
                    setfilter(list)
                }
                else{
                    setfilter([])
                    setfunds([])
                }
            }
            catch(err){
                alert("somthing went wrong")
            }
            finally{
                setload(false)
            }
        }
        FetchFunds()


    },[])

useEffect(()=>{
    let filtered=Funds.filter((f)=>
        f.title.toLowerCase().includes(find.toLowerCase())
    )
    setfilter(filtered)
},[find,Funds])


return(
    <>
    <div>
         <div className="flex items-center justify-center p-4 gap-2">
                    <input
                      className="border text-center p-2 rounded"
                      type="text"
                      placeholder="Find FundRaiser"
                      onChange={e=>setfind(e.target.value)}
                    />
                    <button className="border rounded p-2 hover:bg-black hover:text-white">Search</button>
                  </div>
    </div>

    <div>
         {load ? (
        <p>Loading fundraisers...</p>
      ) : filter.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filter.map((fund) => (
            <div
             key={fund.id}
             onClick={() => navigate(`/fundraiser/${fund.id}`)}
               className="border text-left rounded shadow p-3">
              {fund.image && (
                <img
                  src={fund.image}
                  alt={fund.title}
                  className="w-full h-30 object-cover rounded mb-3"
                />
              )}
              <p className="text-lg font-light "><strong>Fundraiser:</strong> {fund.title}</p>
              <div className="flex justify-between">
                <p className="text-lg font-light "><strong>Goal:</strong> Rs.{fund.goal}</p>
               
              <button className="bg-lime-300 p-2 rounded ">View Detail</button>
              </div>
               <div className="w-full bg-gray-400 rounded-2xl h-2 mt-2">
                  <div className="bg-blue-600 h-2 rounded-2xl" style={{width: `${Math.min((fund.total / fund.goal) * 100, 100)}%`}}>
                  </div>
                </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No matching fundraisers found.</p>
      )}
    </div>
    </>
)

}

export default BrowseFunds