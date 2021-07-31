import Product from "../modal/Products";

export const PRODUCTS_LOADING:string="PRODUCTS_LOADING";
export const PRODUCTS_LOADING_SUCCESS:string="PRODUCTS_LOADING_SUCCESS";
export const PRODUCTS_LOADING_FAIL:string="PRODUCTS_LOADING_FAIL";

interface Products_Async{
    products:Product[];
    message:string;
    loading:boolean;
}
interface ProductsLoading extends Products_Async{
    type:typeof PRODUCTS_LOADING
}
interface ProductsLoadingSuccess extends Products_Async{
    type:typeof PRODUCTS_LOADING_SUCCESS
}
interface ProductsLoadingFail extends Products_Async{
    type:typeof PRODUCTS_LOADING_FAIL
}
export type Product_types=ProductsLoading | ProductsLoadingSuccess | ProductsLoadingFail;