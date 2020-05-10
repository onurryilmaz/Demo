import { toast } from "react-toastify";

import {
    PRODUCT_POST_PENDING, 
    PRODUCT_POST_FULFILLED, 
    PRODUCT_POST_REJECTED,
    
    PRODUCT_PUT_PENDING, 
    PRODUCT_PUT_FULFILLED, 
    PRODUCT_PUT_REJECTED,
    
    PRODUCT_DELETE_PENDING, 
    PRODUCT_DELETE_FULFILLED, 
    PRODUCT_DELETE_REJECTED,

    PRODUCT_ALL_PENDING, 
    PRODUCT_ALL_FULFILLED, 
    PRODUCT_ALL_REJECTED,

    PRODUCT_GET_PENDING, 
    PRODUCT_GET_FULFILLED, 
    PRODUCT_GET_REJECTED,
} from './types';

const initialState = {
    productPost : {
        data : [],
        loading : false,
        error : {},
    },
    productPut : {
        data : [],
        loading : false,
        error : {},
    },
    productDel : {
        data : [],
        loading : false,
        error : {},
    },
    productAll : {
        data : [],
        loading : false,
        error : {},
    },
    productGet : {
        data : [],
        loading : false,
        error : {},
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        //PRODUCT POST
        case PRODUCT_POST_PENDING:
            return {
                ...state,
                productPost : {
                    ...state.productPost,
                    loading : true,
                }
            }
        case PRODUCT_POST_FULFILLED:
            return {
                ...state,
                productPost : {
                    ...state.productPost,
                    data : action.payload,
                    loading : false,
                    toast : toast.success(`Ürün Başarılı Şekilde Oluşturuldu`),
                },
            }
        case PRODUCT_POST_REJECTED:
            return {
                ...state,
                productPost : {
                    ...state.productPost,
                    error : action.payload,
                    loading : false,
                    toast : toast.error(`Ürün oluşturulurken hata oluştu ${action.payload}`),
                }
            }

        //PRODUCT PUT
        case PRODUCT_PUT_PENDING:
            return {
                ...state,
                productPut : {
                    ...state.productPut,
                    loading : true,
                }
            }
        case PRODUCT_PUT_FULFILLED:
            return {
                ...state,
                productPut : {
                    ...state.productPut,
                    data : action.payload,
                    loading : false,
                    toast : toast.success(`Ürün Başarılı Şekilde Değiştirildi`),
                },
            }
        case PRODUCT_PUT_REJECTED:
            return {
                ...state,
                productPut : {
                    ...state.productPut,
                    error : action.payload,
                    loading : false,
                    toast : toast.error(`Ürün değiştirilirken hata oluştu ${action.payload}`),
                }
            }

        //PRODUCT DELETE
        case PRODUCT_DELETE_PENDING:
            return {
                ...state,
                productDel : {
                    ...state.productDel,
                    loading : true,
                }
            }
        case PRODUCT_DELETE_FULFILLED:
            return {
                ...state,
                productDel : {
                    ...state.productDel,
                    data : action.payload,
                    loading : false,
                    toast : toast.success(`Ürün Başarılı Şekilde Silindi`),
                },
            }
        case PRODUCT_DELETE_REJECTED:
            return {
                ...state,
                productDel : {
                    ...state.productDel,
                    error : action.payload,
                    loading : false,
                    toast : toast.error(`Ürün Slinirken hata oluştu ${action.payload}`),
                }
            }

        //PRODUCT ALL
        case PRODUCT_ALL_PENDING:
            return {
                ...state,
                productAll : {
                    ...state.productAll,
                    loading : true,
                }
            }
        case PRODUCT_ALL_FULFILLED:
            return {
                ...state,
                productAll : {
                    ...state.productAll,
                    data : action.payload,
                    loading : false,
                },
            }
        case PRODUCT_ALL_REJECTED:
            return {
                ...state,
                productAll : {
                    ...state.productAll,
                    error : action.payload,
                    loading : false,
                }
            }

        //PRODUCT GET
        case PRODUCT_GET_PENDING:
            return {
                ...state,
                productGet : {
                    ...state.productGet,
                    loading : true,
                }
            }
        case PRODUCT_GET_FULFILLED:
            return {
                ...state,
                productGet : {
                    ...state.productGet,
                    data : action.payload,
                    loading : false,
                },
            }
        case PRODUCT_GET_REJECTED:
            return {
                ...state,
                productGet : {
                    ...state.productGet,
                    error : action.payload,
                    loading : false,
                }
            }
        
        default:
            return state;
    }
}