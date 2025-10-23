import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch('/categories.json').then(result => result.json());
console.log(categoryPromise);
const Categories = () => {
    const categories = use(categoryPromise);
    return (
        <div>
            <h2 className='font-semibold !text-base-400'>All Category</h2>
            <div className='grid grid-cols-1 mt-4'>
                {
                    categories.map((category) => {
                        return <NavLink key={category.id} className={({ isActive }) =>
                            ` bg-base-100 border-0 hover:bg-base-200 text-accent text-left pl-4 py-2 ${isActive ? 'bg-base-300 font-semibold text-base-400' : ''}`
                        } to={`/category/${category.id}`} > {category.name}</NavLink>
                    })
                }
            </div>
        </div>
    );
};


export default Categories;