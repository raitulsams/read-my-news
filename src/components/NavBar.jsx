import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'
const NavBar = () => {
    return (
        <div>
            <div className='flex items-center'>
                <div className="nav-left flex-1"></div>
                <div className="nav-mid flex gap-3">
                    {/* <NavLink to="/"><span className='text-[#FF8C47] font-semibold text-sm'>Home</span></NavLink> */}
                    <NavLink className={({ isActive }) =>
                        isActive ? 'font-bold border-b-1 text-[#FF8C47]' : 'font-default'
                    } to="/">
                        <span>Home</span>
                    </NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'font-bold border-b-1 text-[#FF8C47]' : 'font-default'
                    } to="/about">
                        <span>About</span>
                    </NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? 'font-bold border-b-1 text-[#FF8C47]' : 'font-default'
                    } to="/career">
                        <span>Career</span>
                    </NavLink>
                    {/* <NavLink to="/bookmarkednews"><span className='text-[#FF8C47] font-semibold text-sm'>Bookmarked News</span></NavLink> */}
                    <NavLink className={({ isActive }) =>
                        isActive ? 'font-bold border-b-1 text-[#FF8C47]' : 'font-default'
                    } to="/bookmarkednews">
                        <span>Bookmarked News</span>
                    </NavLink>
                </div>
                <div className="nav-right flex gap-3 justify-end flex-1">
                    <img src={user} className='' alt="" />
                    <NavLink to="/login">
                        <button className='btn btn-primary px-10'>Login</button>
                    </NavLink>

                </div>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default NavBar;