import ApiBASE from "../../../store/api";

//PRODUCT POST
export function productPost(data) {
    return dispatch => {
        dispatch({
            type: 'PRODUCT_POST',
            async payload () {
                const res = await ApiBASE.jsonApi.post(`/product`, data);
                await dispatch(productAll())
                return res.data;
            }
        })
    }
}
//PRODUCT POST
export function productPut(data) {
    return dispatch => {
        dispatch({
            type: 'PRODUCT_PUT',
            async payload () {
                const res = await ApiBASE.jsonApi.put(`/product/${data.id}`, data);
                await dispatch(productAll())
                return res.data;
            }
        })
    }
}

//USERS GET
export function productDel(id) {
    return dispatch => {
        dispatch({
            type: 'PRODUCT_DELETE',
            async payload () {
                const res = await ApiBASE.jsonApi.delete(`/product/${id}`);
                await dispatch(productAll())
                return res.data;
            }
        })
    }
}
//USERS ALL
export function productAll() {
    return dispatch => {
        dispatch({
            type: 'PRODUCT_ALL',
            async payload () {
                const res = await ApiBASE.jsonApi.get(`/product`);
                return res.data;
            }
        })
    }
}
//USERS GET
export function productGet(id) {
    return dispatch => {
        dispatch({
            type: 'PRODUCT_GET',
            async payload () {
                const res = await ApiBASE.jsonApi.get(`/product/${id}`);
                return res.data;
            }
        })
    }
}
