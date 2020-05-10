import ApiBASE from "../../../store/api";

//USERS ALL
export function categoryAll() {
    return dispatch => {
        dispatch({
            type: 'CATEGORY_ALL',
            async payload () {
                const res = await ApiBASE.api.get(`/sapigw/product-categories`);
                return res.data;
            }
        })
    }
}
