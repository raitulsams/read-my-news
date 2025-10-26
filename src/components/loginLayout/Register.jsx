// 
import React, { useState } from 'react';
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { SiGoogle } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { TbBrandTwitter } from "react-icons/tb";
import { NavLink } from 'react-router';
import { motion } from "framer-motion";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const handleTogglePassword = () => {
        if (password) setShowPassword(!showPassword);
    };

    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const inputVariants = {
        hover: { scale: 1.02 },
        tap: { scale: 0.98 }
    };

    const iconVariants = {
        hover: { scale: 1.2, rotate: 5 },
        tap: { scale: 0.9 }
    };

    return (
        <div className="hero min-h-auto">
            <div className="hero-content text-center">
                <motion.div
                    className="max-w-md"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.form
                        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 m-auto shadow-md"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <label className="label">Full Name</label>
                        <motion.input
                            type="text"
                            name="name"
                            className="input input-primary"
                            placeholder="e.g. Al Sams"
                            required
                            whileHover="hover"
                            whileTap="tap"
                            variants={inputVariants}
                        />

                        <label className="label mt-2">Phone</label>
                        <motion.input
                            type="tel"
                            name="phone"
                            className="input input-neutral"
                            placeholder="Phone"
                            required
                            whileHover="hover"
                            whileTap="tap"
                            variants={inputVariants}
                        />

                        <label className="label mt-2">Email</label>
                        <motion.input
                            type="email"
                            name="email"
                            className="input input-accent"
                            placeholder="Email"
                            required
                            whileHover="hover"
                            whileTap="tap"
                            variants={inputVariants}
                        />

                        <label className="label mt-2">Password</label>
                        <div className="relative">
                            <motion.input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                className="input"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                whileHover="hover"
                                whileTap="tap"
                                variants={inputVariants}
                            />
                            <span
                                className={`absolute top-1/2 right-3 -translate-y-1/2 ${password ? 'cursor-pointer' : 'cursor-default'}`}
                                onClick={handleTogglePassword}
                            >
                                {showPassword ? <VscEyeClosed size={23} /> : <VscEye size={23} />}
                            </span>
                        </div>

                        <motion.button
                            className="btn btn-active btn-primary mt-4"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Register
                        </motion.button>

                        <div className="flex w-full flex-col">
                            <div className="divider text-base text-gray-400">Or sign in with</div>
                        </div>

                        <div className="flex justify-center gap-3 mt-2">
                            <motion.button
                                className="btn btn-outline hover:bg-white hover:text-gray-700 px-3 text-accent"
                                variants={iconVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <SiGoogle size={20} />
                            </motion.button>
                            <motion.button
                                className="btn btn-outline hover:bg-white hover:text-gray-700 px-3 text-accent"
                                variants={iconVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <FiGithub size={23} />
                            </motion.button>
                            <motion.button
                                className="btn btn-outline hover:bg-white hover:text-gray-700 px-3 text-accent"
                                variants={iconVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <TbBrandTwitter size={23} />
                            </motion.button>
                        </div>

                        <div className="mt-4">
                            <p className="text-base text-base-400">
                                Already have an account?{" "}
                                <NavLink className="hover:underline text-[var(--color-primary)] font-semibold underline" to="..">
                                    Sign in
                                </NavLink>
                            </p>
                        </div>
                    </motion.form>
                </motion.div>
            </div>
        </div>
    );
};

export default Register;
