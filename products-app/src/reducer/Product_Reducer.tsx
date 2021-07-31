import Product from "../modal/Products";
import { Product_types, PRODUCTS_LOADING,PRODUCTS_LOADING_SUCCESS, PRODUCTS_LOADING_FAIL} from "../types/Product_types";
interface IState{
    products:Product[],
    loading:boolean,
    message:string,
}
const initialState:IState={
    products:[],
    loading:false,
    message:""
}
const ProductReducer=(state=initialState,action:Product_types):IState=>{
 switch(action.type){
     case PRODUCTS_LOADING:
     case PRODUCTS_LOADING_SUCCESS:
     case PRODUCTS_LOADING_FAIL:
         return{
             ...state,
             loading:action.loading,
             products:action.products,
             message:action.message,
         }
         break;
         default:
             return state;
 }
}
export default ProductReducer;
