import axios from "axios"
import { Dispatch } from "react"
import { LoginTypes,LOGIN,LOGIN_FAIL,LOGIN_SUCCESS } from "../types/LoginTypes"

const loginAction=(obj:any)=>{
    return async(dispatch:Dispatch<LoginTypes>)=>{
     dispatch({
         type:LOGIN,
         status:{login:" "},
         loading:false,
         message:""
     })
     try{
         const res=await axios.post("http://localhost:8080/login",obj);
         const {data}= res;
         dispatch({
            type:LOGIN_SUCCESS,
            status:{login:"success"},
            loading:true,
            message:"" 
         })
     }catch(err){
     dispatch({
         type:LOGIN_FAIL,
         status:{login:"fail"},
         loading:true,
         message:err.message
     })
    }
    }
}
export default loginAction;