import axios from "axios";
import { Dispatch } from "react";
import { Product_types, PRODUCTS_LOADING,PRODUCTS_LOADING_SUCCESS, PRODUCTS_LOADING_FAIL} from "../types/Product_types";
const ProductAction=()=>{
    return async(dispatch:Dispatch<Product_types>)=>{
        dispatch({
            type:PRODUCTS_LOADING,
            loading:false,
            products:[],
            message:""
        })
        try{
            const res=await axios.get("http://localhost:8080/products");
            const {data}=res;
            dispatch({
                type:PRODUCTS_LOADING_SUCCESS,
                products:data,
                loading:true,
                message:""

            })
            }catch(err){
                dispatch({
                    type:PRODUCTS_LOADING_FAIL,
                    products:[],
                loading:true,
                message:err.message
                })
        }

    }

}
export default ProductAction;