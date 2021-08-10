import LoginModal from "../modal/Login";
import { LoginTypes, LOGIN_FAIL, LOGIN_SUCCESS,LOGIN } from "../types/LoginTypes";

interface IState{
    status:LoginModal,
    loading:boolean,
    message:string
}
const initialState:IState={
    loading:false,
    status:{login:""},
    message:""

}
const loginReducer=(state=initialState,action:LoginTypes):IState=>{
    switch (action.type){
        case LOGIN:
        case LOGIN_SUCCESS:
        case LOGIN_FAIL:
            return{
                ...state,
                loading:action.loading,
                message:action.message,
                status:action.status
            }
            break;
            default:
                return state;
    }


}
export default loginReducer;