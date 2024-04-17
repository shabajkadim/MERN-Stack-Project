import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

const Home = () => {
  
  const{state,LOGOUT}=useContext(AuthContext)
  console.log(state,"state");
  return (
    <div style={state}  className='pt-20 bg-slate-100 min-h-0 min-h-[650px]' >
     
      <h2 >Home</h2>
      
     
      <h2>welcom:{state?.user?.name}</h2>
      <button onClick={LOGOUT}></button>
      {/* <hr/> */}
    </div>
  )
}

export default Home

