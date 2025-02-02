import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log(email, password)
    let result = await fetch(`${window.location.origin}/login`, {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.log(result)
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result))

      navigate('/')

    } else {
      alert("Please Enter valide details")
    }
  }

  return (
    <div>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Log<span className='text-pink-500'>In</span></h3>
          <div className='mt-4 space-y-3'>
            <span>Email</span>
            <br />
            <input type='text' placeholder='Enter your email' className='w-80 px-3 py-1 border outline-none rounded'
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />
          </div>

          <div className='mt-4 space-y-3'>
            <span>Password</span>
            <br />
            <input type='password' placeholder='Enter your password' className='w-80 px-3 py-1 border outline-none rounded'
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>


          <div className='flex justify-around mt-4'>
            <button onClick={handleLogin} className='bg-pink-500 text-white px-6 py-1 hover:bg-pink-700 duration-200'>Login</button>
            <p>Not registered? <Link to={"/signup"} className='underline text-blue-500 cursor-pointer'  >Signup</Link></p>
          </div>

        </div>
      </dialog>

    </div>
  )
}

export default Login