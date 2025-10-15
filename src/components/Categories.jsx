import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch('/categories.json').then(result => result.json());
console.log(categoryPromise);
const Categories = () => {
    const categories = use(categoryPromise);
    return (
        <div>
            <h2 className='font-semibold'>All Category</h2>
            <div className='grid grid-cols-1 mt-4'>
                {
                    categories.map((category) => {
                        return <NavLink key={category.id} className={({ isActive }) =>
                            `btn bg-base-100 border-0 hover:bg-base-200 text-accent ${isActive ? 'bg-base-300' : ''}`
                        } to={`/category/${category.id}`} > {category.name}</NavLink>
                    })
                }
            </div>
        </div >
    );
};


export default Categories;