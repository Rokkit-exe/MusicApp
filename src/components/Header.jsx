import React from 'react'
import { NavLink } from 'react-router-dom'

function Header({title, itemList}) {
    return (
        <div className='d-flex flex-row justify-content-between align-items-center border-bottom-purple bg-dark text-light' >
            <div className='mx-4'>
                <h1 className='text-light text-bold'>{title}</h1>
            </div>
            <div className='mt-3 mx-4 d-flex flex-row justify-content-center align-items-center'>
                <ul className='d-flex flex-row align-items-center justify-content-center list-unstyled'>
                    {itemList.map((item, key) => 
                        <li className='m-2 p-2 border-gray rounded-1 d-flex align-items-center justify-content-center text-bold' key={key} >
                            <NavLink to={item.path} className="navlink">{item.title}</NavLink>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Header