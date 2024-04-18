import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
const Demo = () => {
  const{state,LOGOUT}=useContext(AuthContext)
  const{allProductData,setAllProductData}=useState([])
 

  async function getAllData(){
    try{
      const response=await axios.get('http://localhost:8000/api/v1/product/get-product',{allProductData})
      setAllProductData(response.data)
      console.log(allProductData);
      // setAllData(false)
    }catch(error){
      console.log(error);
    }
  }
 


  return (
    <div style={state} className='pt-20 bg-slate-100 min-h-0 min-h-[650px]'>
      <h3>Demo page</h3>
      <h2>welcom:{state?.user?.name}</h2>
      <button onClick={LOGOUT}></button>
    </div>
  )
}

export default Demo
