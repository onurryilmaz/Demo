
import {
    CATEGORY_ALL_PENDING, 
    CATEGORY_ALL_FULFILLED, 
    CATEGORY_ALL_REJECTED,
} from './types';

const initialState = {
    categoryAll : {
        data : [],
        loading : false,
        error : {},
    }
    
}

export default (state = initialState, action) => {
    switch (action.type) {
        //CATEGORY ALL
        case CATEGORY_ALL_PENDING:
            return {
                ...state,
                categoryAll : {
                    ...state.categoryAll,
                    loading : true,
                }
            }
        case CATEGORY_ALL_FULFILLED:
            return {
                ...state,
                categoryAll : {
                    ...state.categoryAll,
                    data : action.payload,
                    loading : false,
                },
            }
        case CATEGORY_ALL_REJECTED:
            return {
                ...state,
                categoryAll : {
                    ...state.categoryAll,
                    error : action.payload,
                    loading : false,
                }
            }
        
        default:
            return state;
    }
}