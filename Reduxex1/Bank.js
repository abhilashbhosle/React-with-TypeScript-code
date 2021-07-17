const {createStore}= require("redux");
const initialState={
    bal:10000
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "WITHDRAW":
            return{
                ...state,
                bal:state.bal-action.payload
            }
            break;
        case "DEPOSIT":
            return{
                ...state,
                bal:state.bal+action.payload
            }
            break;
            default:
                return state;
    }

}
const store=createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch({type:"WITRHDRAW",payload:5000})
store.dispatch({type:"DEPOSIT",payload:10000})