import {call,put} from "redux-saga/effects";
import axios from "axios";
function getEmployees(){
    return axios.get("https://restcountries.eu/rest/v2/all")
}
export function *getdata(){
    const res=yield call(getEmployees);
    yield put({type:"EMPLOYEES",value:res})
}