import {delay} from "react"
import {takeLatest,put} from "redux-saga/effects"

function*ageupasync(){
    yield delay(4000);
    yield put({type:"AGE_UP_ASYNC",value:1})
}
export function*watchAgeUp(){
    yield takeLatest("AGE_UP",ageupasync)
}