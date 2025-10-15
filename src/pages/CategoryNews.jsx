import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            This is category news page - {id}
        </div>
    );
};

export default CategoryNews;