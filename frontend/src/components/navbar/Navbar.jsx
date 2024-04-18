import React, { useContext, useState } from "react";
// import logo from "./../project-imge/logo.png";
import { Link } from "react-router-dom";
import homelogo from './../project-imge/homelogo.png'
import { AuthContext } from "../context/AuthContext";


export const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const {state,LOGOUT}=useContext(AuthContext)
  // console.log(state);

  const handleShowProfile=()=>{
    setShowProfile((prevalue=>!prevalue))
  }
  console.log(process.env.REACT_APP_ADMIN_EMAIL);
  
  return (
    <navbar className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/* {Dekstop} */}
      <div className="flex items-center h-full  justify-between ">
        <Link to={"/"}>
          <div className="h-14 w-28 ">
            {/* <img src={logo} className="h-full" /> */}
            <img src={homelogo} className="h-full w-full" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-8 ">
          <div className="flex gap-5 md:gap-8 text-base md:text-lg">
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </div>

          <div className="text-2xl text-slate-600 relative">
            <i class="fa-solid fa-cart-shopping"></i>
            <div className="absolute -top-1 -right-2 text-white rounded-full m-0 p-0 text-sm h-4 w-4 text-center bg-red-500">
              0
            </div>
          </div>

          <div className="text-xl text-slate-600" onClick={handleShowProfile}>
            <div className="text-3xl cursor-pointer">
              <i class="fa-regular fa-circle-user"></i>
            </div>
            {showProfile && (
              <div  className="absolute flex flex-col right-2 bg-white py-2 px-2 shadow drop-shadow">
                <Link to={'new-product'} className="whitespace-nowrap cursor-pointer">New Product</Link>
                {/* { <Link to={'login'} className="whitespace-nowrap cursor-pointer">Login</Link>
                 <p>{state?. user?.email}</p> } */}
                {state?.user?.name? <p><p>{state?. user?.name}</p><button onClick={()=>LOGOUT()}>LOGOUT</button><p></p></p>:<Link to={'login'} className="whitespace-nowrap cursor-pointer">Login</Link>}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile */}
    </navbar>
  );
};
