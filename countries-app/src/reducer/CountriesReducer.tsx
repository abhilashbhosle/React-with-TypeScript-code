import Country from "../modal/Countries"
import {CountriesTypes, COUNTRIES_LOADING, COUNTRIES_LOADING_FAIL, COUNTRIES_LOADING_SUCCESS} from "../types/CountriesTypes"
interface IState{
    loading:boolean,
    countries:Country[],
    error:string
}
const initialState:IState={
    loading:false,
    countries:[],
    error:""
}
const CountriesReducer=(state=initialState, action:CountriesTypes):IState=>{
 switch(action.type){
     case COUNTRIES_LOADING:
     case COUNTRIES_LOADING_FAIL:
     case COUNTRIES_LOADING_SUCCESS:
         return{
             ...state,
             loading:action.loading,
             countries:action.countries,
             error:action.error
         }    
         break
         default:
             return state
}
}
export default CountriesReducer