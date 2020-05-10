import { combineReducers } from 'redux'
//REDUCER
//import category from '../pages/project/api/category/reducer'
import category from '../pages/category/api/reducer'
import product from '../pages/product/api/reducer'



export default combineReducers({
    category,
    product
});