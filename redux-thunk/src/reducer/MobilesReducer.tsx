import Mobile from "../modal/Mobiles";
import {MobileActionTypes, MOBILES_LOADING, MOBILES_LOADING_FAIL, MOBILES_LOADING_SUCCESS} from "../types/MobilesActionTypes"
interface IState{
    loading:boolean;
    mobiles:Mobile[];
    message:string;
}
const initialState:IState={
    loading:false,
    mobiles:[],
    message:" "
};
const MobileReducer=(state=initialState,action:MobileActionTypes):IState=>{
  switch(action.type){
      case MOBILES_LOADING:
      case MOBILES_LOADING_SUCCESS:
      case MOBILES_LOADING_FAIL:
          return{
              ...state,
              loading:action.loading,
              mobiles:action.mobiles,
              message:action.message
          }
          break;
          default:
              return state;
  }
};
export default MobileReducer;

