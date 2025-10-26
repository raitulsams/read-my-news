import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png';
import { motion } from 'framer-motion';
const NavBar = () => {
    return (
        <div>
            <div className='flex items-center'>
                <div className="nav-left flex-1"></div>
                <div className="nav-mid flex gap-3">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "tween" }}
                    >
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "font-bold border-b-2 border-[#FF8C47] text-[#FF8C47]"
                                    : "font-default"
                            }
                            to="/category/0"
                        >
                            <span>Home</span>
                        </NavLink>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "tween" }}
                    >
                        <NavLink className={({ isActive }) =>
                            isActive ? 'font-bold border-b-1 text-[#FF8C47]' : 'font-default'
                        } to="/about">
                            <span>About</span>
                        </NavLink>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "tween" }}
                    > <NavLink className={({ isActive }) =>
                        isActive ? 'font-bold border-b-1 text-[#FF8C47]' : 'font-default'
                    } to="/career">
                            <span>Career</span>
                        </NavLink>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "tween" }}
                    >
                        <NavLink className={({ isActive }) =>
                            isActive ? 'font-bold border-b-1 text-[#FF8C47]' : 'font-default'
                        } to="/bookmarkednews">
                            <span>Bookmarked News</span>
                        </NavLink>
                    </motion.div>
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