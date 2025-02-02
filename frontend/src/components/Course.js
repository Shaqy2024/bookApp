import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Course = () => {
  const [products, setProducts] = useState ([]);
  useEffect(()=>{
getProducts()
  },[])
  const getProducts = async () =>{
let result = await fetch(`${window.location.origin}/products`)
result = await result.json();
setProducts(result)
  }
  console.log(products)
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
<div className='mt-28 items-center justify-center text-center'>
    <h1 className='text-2xl  md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
  <p className='mt-12 '>It is a long established fact that a reader will be distracted by the readable
     content of a page when looking at its layout. The point of using Lorem Ipsum is
      that it has a more-or-less normal distribution of letters, as opposed to using 
      'Content here, content here', making it look like readable English.  </p>
      <Link to={'/'}>
      <button className="px-4 py-1 border bg-pink-500 text-white hover:bg-pink-700 mt-6">Buy Now</button>
      </Link>
     
</div>

<div className='grid grid-cols-1 md:grid-cols-3 md:ml-8 ml-5 gap-1'>
{
  products.map((item)=>(
   
    <div key={item} className=' grid grid-cols-1 md:grid-cols-3 md:ml-8 ml-5 gap-1  mt-12'>


<div className=" card-compact bg-base-100 w-80 shadow-xl  ">

  <figure>
    <img
      src={item.img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}!</h2>
    <p>{item.discription}!</p>
    <div className="space-x-36">
    <button className=' border px-2 rounded-full hover:bg-pink-500 hover:text-white'>{item.prise}</button>
    <Link to={"/buy/" +item._id} className="px-4 py-1 border hover:bg-pink-500">Buy Now</Link>
    </div>
  </div>
</div>
</div>

  ))
}
</div>
















</div>
   
   </>
  )
}

export default Course