import axios from "axios";
import { createContext, useEffect, useReducer } from "react";


export const AuthContext=createContext()

const Reducer=(state,action)=>{
switch (action.type) {
    case "LOGIN":
        return{...state,user:action.payload}
    case "LOGOUT":
        return {...state,user:null}

    default:
       return state
}
}
const InitailState={user:null}


const AuthContextComponent=({children})=>{
    const[state,dispatch]= useReducer(Reducer,InitailState)

    function LOGIN(data){
        dispatch({type:"LOGIN",payload:data})
    }

    function LOGOUT(){
        dispatch({type:"LOGOUT"})
    }
   
   async function getUserData(){
      try{
        // const response=await axios.post("http://localhost:800/api/v1/auth/login",{token})
          const response={data:{success:true , message:"login suucessfull",userData:{name:"shabaaj",email:"shabaaj@1234"}}}
          if(response.data.success){
              // LOGIN(response.data.userData)
              dispatch({type:"LOGIN",payload:response.data.user})
          }
      }catch(error){
          console.log(error);
      }
  }

  useEffect(()=>{
      const token=JSON.parse(localStorage.getItem("token"))
      if(token){
          getUserData()
      }
  },[])
return(
    <AuthContext.Provider value={{state,LOGIN,LOGOUT}}>
        {children}
    </AuthContext.Provider>
)
}
export default AuthContextComponent
