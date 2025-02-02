import React, { useState } from 'react'
import Navebar from './Navebar'
import { Link } from 'react-router-dom';

const Contact = () => {
const [number , setNumber] = useState();
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [massege, setMassege] = useState();

const handelContact = () => {
    console.log(number,email,password,massege)
    alert("hfjdshfjsdhfjsd")
}

  return (
    <>
    <div>
        <Navebar />
    </div>
   <div className=' flex h-screen items-center justify-center'>

   <div className="w-[400px]">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>

    <h3 className="font-bold text-lg">Contact</h3>

    <div className='mt-4 space-y-3'>
      <span>PhoneNo.</span>
      <br/>
      <input type='number' placeholder='Enter your PhoneNo.' className='w-80 px-3 py-1 border outline-none rounded'
     value={number}
     onChange={(e)=>setNumber(e.target.value)}
     
      />
    </div>

    <div className='mt-4 space-y-3'>
      <span>Email</span>
      <br/>
      <input type='text' placeholder='Enter your email' className='w-80 px-3 py-1 border outline-none rounded' 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
    </div>

    <div className='mt-4 space-y-3'>
      <span>Password</span>
      <br/>
      <input type='password' placeholder='Enter your password' className='w-80 px-3 py-1 border outline-none rounded'
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
    </div>
    <div className='mt-4 space-y-3'>
    <textarea className='w-80 px-3 py-1 border outline-none rounded' placeholder="Massege"
    value={massege}
    onChange={(e)=>setMassege(e.target.value)}
    ></textarea>

        </div>

    <div className='flex justify-around mt-4'>
      <button onClick={handelContact}  className='bg-pink-500 text-white px-6 py-1 hover:bg-pink-700 duration-200'>Signup</button>
    
  
    </div>
   
  </div>
</div>


   </div>
   </>
  )
}

export default Contact