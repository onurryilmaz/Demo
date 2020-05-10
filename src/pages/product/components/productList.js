import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {productAll} from '../api/action'

//MODAL
import EditProduct from '../components/modal/editProduct'
import DeleteProduct from '../components/modal/deleteProduct'

const ProductList = () => {
    const dispatch = useDispatch();
    const allProduct = useSelector( state => state.product.productAll )

    useEffect(() => {
        dispatch(productAll())
    }, [dispatch])
    return (
        <div className='product-list'>
            <div className="row">
            {allProduct.data && allProduct.data.map((item) => {
                return(
                    <div className='col-md-3' key={item.id}>
                        <div className="pl-box">
                            <div className="images">
                                {item.images && <img src={item.images} alt={item.title} />}
                            </div>
                            <ul>
                                {item.title && <li><span>{item.title}</span></li>}
                                {item.quantity && <li><b>Adet</b> <span>{item.quantity}</span></li>}
                                {item.salePrice && <li><b>Fiyat</b> <span>{item.salePrice}</span></li>}
                                {item.description && <li><b>Açıklama</b> <span>{item.description}</span></li>}
                            </ul>
                            <EditProduct item={item} />
                            <DeleteProduct id={item.id} title={item.title}/>
                        </div>
                    </div>
                )
                
            })}
            </div>
        
        </div>
    );
}

export default ProductList;
