import React, { useState } from "react";
import { data } from "../../firebase";
import { ref as dbRef, push } from "firebase/database";
import { v4 as uuidv4 } from "uuid";



function CreateFundraiser(){
    const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [goal, setGoal] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("")
  const [wait, setwait] = useState(false)

  



  async function uploadImage(file){
    let url=`https://api.cloudinary.com/v1_1/dqfrnmqze/upload`
    let formdata=new FormData()
    formdata.append("file",file)
    formdata.append("upload_preset","FundBook")

    let res=await fetch(url,{
        method:"POST",
        body:formdata,
    })

    if(!res.ok){
         return alert("Failed")
    }
        let getUrl=await res.json()
        return getUrl.secure_url
  }

  
  function Check(e){
     e.preventDefault()
     let ufile=e.dataTransfer.files[0]

     if(ufile){
        setFile(ufile)
        setPreview(URL.createObjectURL(ufile))
     }
  }

  function CheckFile(e){
    let curr=e.target.files[0]

    if(curr){
        setFile(curr)
        setPreview(URL.createObjectURL(curr))
    }
  }

  async function Submit(e){
    e.preventDefault()
    if(!title || !desc || !goal ){
        alert("Fill form carefully")
        return
    }
     
    try{
        setwait(true)
        let imagelink=await uploadImage(file)

        let newFund=await push(dbRef(data,"fundraisers/"),{
          title,
          decription:desc,
          goal,
          raised:0,
          image:imagelink,
          createdAt:Date.now()
        })

        let fundid=newFund.key
         await push(dbRef(data, `donations/${fundid}`), null);
         await push(dbRef(data, `comments/${fundid}`), null);

        alert("Fundraiser Created Successfully")
        setTitle("")
        setDesc("")
        setGoal("")
        setFile(null)
        setPreview("")
        setwait(false);

    }
    catch(err){
        console.log(err.message)
        alert("Data is not submitted try again")
        setwait(false);

    }
  }

  return(
  <div className="max-w-xl mx-auto mt-10 p-10 bg-white shadow-lg rounded ">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Fundraiser</h2>

      <form onSubmit={Submit} className="space-y-4 p-4 gap-20">
        <input
          type="text"
          placeholder="Fundraiser Title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /> <br /> <br />

        <textarea
          placeholder="Description"
          className="w-full p-2 border rounded"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />  <br /> <br />

        <input
          type="number"
          placeholder="Fundraising Goal (in ₹)"
          className="w-full p-2 border rounded"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />  <br /> <br />

        {/* Drag and Drop */}
        <div
          onDrop={Check}
          onDragOver={(e) => e.preventDefault()}
          className="border-2 border-dashed p-4 text-center rounded bg-gray-50 "
        >
          <p>Drag & drop an image here, or</p>
          <input type="file" accept="image/*" onChange={CheckFile} className="mt-2" />
        </div>  <br /> <br />

        {preview && (
          <div className="mt-2">
            <img src={preview} alt="Preview" className="w-40 h-40 object-cover rounded mx-auto" />
          </div>
        )}

        <button type="submit" disabled={wait}  className="w-full bg-blue-600 text-white py-2 rounded">
          {wait?"creating...":"Submit Fundraiser"}
        </button>
      </form>
    </div>
  )
}

export default CreateFundraiser