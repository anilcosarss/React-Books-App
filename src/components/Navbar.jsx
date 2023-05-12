import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAppContext } from './context/appContext'
import '../App.css'

const Navbar = () => {
    const { favorites } = useAppContext();

    return (
        <div className='flex items-center justify-evenly w-[100%] bg-black text-white h-16 text-xl font-bold'>
            <div className="">
               
                <NavLink to="/" activeClassName="active-link">
                    <h1>Book List</h1>
                </NavLink>

            </div>
            <div className="">
                <NavLink to="/favorites">
                    <h1>Your Favorites ({favorites.length})</h1>
                </NavLink>
            </div>

        </div>
    )
}

export default Navbar