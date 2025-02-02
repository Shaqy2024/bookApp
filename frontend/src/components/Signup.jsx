import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [name, setname] = useState();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigat = useNavigate();




  const handleSignup = async () => {
    console.log(name, email, password)
    let result = await fetch(`${window.location.origin}/signup`, {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-type': 'application/json'
      },
    });
    result = await result.json()
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result))
    navigat('/course')
  }

  return (
    <>
      <div className=' flex h-screen items-center justify-center'>

        <div className="w-[600px]">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            </form>
            <h3 className="font-bold text-lg">Sign<span className='text-pink-500'>Up</span></h3>

            <div className='mt-4 space-y-3'>
              <span>Name</span>
              <br />
              <input type='text' placeholder='Enter your Name' className='w-80 px-3 py-1 border outline-none rounded'
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>

            <div className='mt-4 space-y-3'>
              <span>Email</span>
              <br />
              <input type='text' placeholder='Enter your email' className='w-80 px-3 py-1 border outline-none rounded'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className='mt-4 space-y-3'>
              <span>Password</span>
              <br />
              <input type='password' placeholder='Enter your password' className='w-80 px-3 py-1 border outline-none rounded'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>


            <div className='flex justify-around mt-4'>
              <button onClick={handleSignup} className='bg-pink-500 text-white px-6 py-1 hover:bg-pink-700 duration-200'>Signup</button>
              <p>Have account? <button className='underline text-blue-500 cursor-pointer'
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >Signup</button></p>
              <Login />
            </div>

          </div>
        </div>


      </div>
    </>
  )
}

export default Signup