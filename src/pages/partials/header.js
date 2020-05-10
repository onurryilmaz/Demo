import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Navigation from '../category/components/navigation'

//Action
import {categoryAll } from '../category/api/action';

const Header = () => {
    const dispatch = useDispatch();
    const allCategory = useSelector( state => state.category.categoryAll)

    useEffect(() => {
        dispatch(categoryAll())
    }, [dispatch])

    return (
        <header>
            <nav>
                {allCategory.data && <Navigation category = {allCategory.data.categories}/>}
            </nav>
        </header>
    );
}

export default Header;
