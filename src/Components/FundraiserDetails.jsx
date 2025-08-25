import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { auth } from "../firebase";

function FundraiserDetails() {
  const { id } = useParams();

  const [fund, setfund] = useState(null);
  const [donars, setdonars] = useState([]);
  const [comments, setcomments] = useState([]);

  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");
  const user = auth.currentUser;
  const userEmail = user?.email || "FundBook User";

  useEffect(() => {
    async function fetchDetail() {
      try {
        const res = await axios.get(
          `https://fundbook-app-default-rtdb.firebaseio.com/fundraisers/${id}.json`
        );
       let funddata=res.data

        let dres = await axios.get(
          `https://fundbook-app-default-rtdb.firebaseio.com/donations/${id}.json`
        );
        let dlist = dres.data ? Object.values(dres.data) : [];
        let total=dlist.reduce((s,d)=>{
            return s+Number(d.amount||0)},0)

            setfund({...funddata,raised:total})

            setdonars(dlist)

        let cres = await axios.get(
          `https://fundbook-app-default-rtdb.firebaseio.com/comments/${id}.json`
        );
        let clist = cres.data ? Object.values(cres.data) : [];
        setcomments(clist);
      } catch (err) {
        alert("somthing went Wrong", err);
      }
    }
    fetchDetail();
  }, [id]);

  async function checkDonation(e) {
    e.preventDefault();

    if (!amount) return alert("Enter Donation Amount");

    let donation = { name: userEmail, amount, time: Date.now() };

    await axios.post(
      `https://fundbook-app-default-rtdb.firebaseio.com/donations/${id}.json`,
      donation
    );

    setdonars((p) => [...p, donation]);
    confirm("Your Dontaion is Successfull");
    setAmount("");
  }

  async function checkComments(e) {
    e.preventDefault();

    if (!comment) return alert("Fill All details");

    let newcomment = { name: userEmail, comment, time: Date.now() };

    await axios.post(
      `https://fundbook-app-default-rtdb.firebaseio.com/comments/${id}.json`,
      newcomment
    );

    setcomments((p) => [...p, newcomment]);
    setComment("");
  }
   if (!fund){return <p className="text-2xl text-center">Loading....</p>;
    }
  return (
    <>
      <div className="mt-5">
        <div className="text-center border-1 rounded shadow-xl">
          <div className="flex justify-center items-center">
            <img className="text-center h-90 w-90  mt-5 border rounded-2xl bg-gray-300 shadow-xl hover:shadow-cyan-300" src={fund.image} alt="" />
          {/* Second  */}
          </div>
      <div className=" px-4 py-5 ">
        <h3 className="text-center tracking-widest ">
          Details
          
          <br />
          <span className="tracking-tighter font-extrabold text-cyan-500">
            ___________________
          </span>
        </h3>
        <div className="flex justify-center gap-6 items-center flex-wrap  mt-10  ">
          <div className="border p-10 rounded shadow-[0px_20px_30px_-10px_rgb(38,_57,_77)]">
            <div>
              <p className="border-b-2 border-b-cyan-500 ">Name</p>
             <b className="text-center break-words"> {fund.title}</b>
            </div>
          </div>
          <div className="border p-10 rounded shadow-[0px_20px_30px_-10px_rgb(38,_57,_77)]">
           <p className="border-b-2 border-b-cyan-500">Goal</p>
           <b className="text-center">{fund.goal}.Rs</b>
          </div>
          <div className="border p-10 rounded shadow-[0px_20px_30px_-10px_rgb(38,_57,_77)]">
            <p className="border-b-2 border-b-cyan-500">Raised</p>
            <b className="text-center">{fund.raised}.Rs</b>
          </div>
        </div>
      </div>
       <h3 className="text-center tracking-widest ">
          Description
          
          <br />
          <span className="tracking-tighter font-extrabold text-cyan-500">
            ___________________
          </span>
        </h3>
            <p className="font-serif font-extralight break-words">{fund.decription}</p>
        </div>
         

        <div className="mt-5">
          <h3 className="text-center tracking-widest ">
           Donors
          <br />
          <span className="tracking-tighter font-extrabold text-cyan-500">
            ___________________
          </span>
        </h3>
        <marquee behavior="" direction="up">
         <div className="text-center  h-40">
             {donars.length > 0 ? (
            donars.map((d, i) => (
                <div className="flex justify-center items-center" key={i}>
                    
               <p className="bg-black border rounded p-2 font-mono font-extralight text-white">📢{d.name}➖💲{d.amount}.00Rs</p>
              </div>
              
            ))
          ) : (
            <p className="text-2xl text-center">No Donation Yet</p>
          )}
         </div>
         </marquee>
         
        </div>
        
      </div>

      <div className="flex justify-center items-center gap-2 mt-5">
        <input
        className="h-10 border-1 rounded p-2 text-center"
          type="number"
          placeholder="Enter Donation Amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />

        <button
        className="bg-black text-white h-10 rounded p-2"
        onClick={checkDonation}>Donate</button>
        
      </div>
<hr />
      <div className=" mt-5 ml-3 mr-2 rounded">
         <h3 className=" tracking-widest ">
           Comments
          <br />
          <span className="tracking-tighter font-extrabold text-cyan-500">
            ___________________
          </span>
        </h3>
        <div>
        {comments.length > 0 ? (
          comments.map((c, i) => (
            <p className="border-1  w-full" key={i}>
              <p className="ml-2 break-words text-l">  {c.comment}</p>
              <p className="text-xs  ml-2">-{c.name}</p>
            </p>
          ))
        ) : (
          <p className="text-2xl text-center">No Comments Yet</p>
        )}
        </div>
      </div>

     <div className="flex md:flex-row flex-col gap-2.5 p-2.5">
  <input
    className="h-10 md:w-50 w-full border rounded p-2 text-center"
    placeholder="Add your Comment"
    value={comment}
    onChange={(e) => {
      setComment(e.target.value);
    }}
  />

  <button
    className="bg-black text-white h-10 rounded p-2 md:w-30 w-full"
    onClick={checkComments}
  >
    Add
  </button>
</div>
    </>
  );
}

export default FundraiserDetails;
