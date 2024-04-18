import React, { useContext, useEffect } from 'react'
import { AuthContext } from './context/AuthContext'

const Home = () => {
  
  
  return (
    <div   className='pt-20 bg-slate-100 min-h-0 min-h-[650px] ' >
     <div className=' p-2 md:p-4 md:flex'>
      <div className=' md:w-1/2'>
        <p className=' md:flex '>
          <span className=' bg-slate-400 items-center  text-xl font-bold text-neutral-900 md:bg-slate-400  mr-4 h-12 items-center pt-2 px-4 rounded-full  text-2xl font-bold text-neutral-900 '> Bike Delivery </span> 
          <span className='md: w-40  border-b-4  border-red-900 mmb-2 '><img className='h-20 ' src='https://cdn-icons-png.freepik.com/512/9561/9561688.png' alt='bike-imge' /></span>
        </p>
        <p className='text-7xl font-bold'>The Fasted Delivery In <span className='text-red-500'>Your Home</span></p>

        <p className='md:mt-2 text-small max-w-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <button className='bg-red-500 hover:bg-red-700 mt-2 h-10 w-40 text-slate-100  font-bold rounded-md'>ORDER NOW</button>
      </div>

      <div className='w-1/2'>
        <div>right</div>
        <div>right</div>
        <div>right</div>
        <div>right</div>
      </div>
     </div>
    </div>
  )
}

export default Home

