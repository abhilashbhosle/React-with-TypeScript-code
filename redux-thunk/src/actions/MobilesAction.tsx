import axios from "axios";
import { type } from "os";
import { Dispatch } from "redux";
import{MobileActionTypes,MOBILES_LOADING,MOBILES_LOADING_FAIL,MOBILES_LOADING_SUCCESS} from "../types/MobilesActionTypes";
const getMobiles=()=>{
    return async(dispatch:Dispatch<MobileActionTypes>)=>{
        dispatch({
            type:MOBILES_LOADING,
            loading:false,
            mobiles:[],
            message:""
        })
        try{
            const res=await axios.get("http://localhost:8080/mobiles")
            const {data} = res;
            dispatch({
                loading:true,
                mobiles:data,
                message:" ",
                type:MOBILES_LOADING_SUCCESS

            })
        }catch(err){
            dispatch({
            loading:true,
            mobiles:[],
            message:err.message,
            type:MOBILES_LOADING_FAIL
        })
        }
    }
}
export default getMobiles;