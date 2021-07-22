import Mobile from "../modal/Mobiles"

export const MOBILES_LOADING:string="MOBILES_LOADING";

export const MOBILES_LOADING_SUCCESS:string="MOBILES_LOADING_SUCCESS";

export const MOBILES_LOADING_FAIL:string="MOBILES_LOADING_FAIL";

interface MobilesAsync{
    mobiles:Mobile[];
    message:string;
    loading:boolean;
}
interface MobilesLoading extends MobilesAsync{
    type:typeof MOBILES_LOADING
}
interface MobilesLoadingSuccess extends MobilesAsync{
    type:typeof MOBILES_LOADING_SUCCESS
}
interface MobilesLoadingFail extends MobilesAsync{
    type:typeof MOBILES_LOADING_FAIL;
}

export type MobileActionTypes=MobilesLoading|MobilesLoadingSuccess|MobilesLoadingFail;