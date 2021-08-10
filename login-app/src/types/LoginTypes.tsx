import LoginModal from "../modal/Login"
export const LOGIN:string="LOGIN";
export const LOGIN_SUCCESS:string="LOGIN_SUCCESS";
export const LOGIN_FAIL:string="LOGIN_FAIL";
interface loginAsync{
    loading:boolean;
    status:LoginModal;
    message:string;
}
interface Login extends loginAsync{
    type:typeof LOGIN;
}
interface LoginSuccess extends loginAsync{
    type:typeof LOGIN_SUCCESS;
}
interface LoginFail extends loginAsync{
    type:typeof LOGIN_FAIL;
}
export type LoginTypes=Login|LoginSuccess|LoginFail;