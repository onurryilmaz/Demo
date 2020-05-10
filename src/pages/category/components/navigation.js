import React from 'react'
import {NavLink} from 'react-router-dom';

const Navigation = ({category}) => {
    return (
        <ul>
            {category && category.map((item) => {
                return(
                    <li key={item.id}>
                        <NavLink to="#">{item.name}</NavLink>
                        {item.subCategories.length !== 0 && <Navigation category={item.subCategories}/>}
                    </li>
                )
            })}
        </ul>
    );
}

export default Navigation;
