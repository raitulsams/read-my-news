import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const { id } = useParams();
    const categoryNewsData = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);
    useEffect(() => {
        if (id === '0') {
            setCategoryNews(categoryNewsData);
            return;
        }
        else if (id == '1') {
            const filterTodayNews = categoryNewsData.filter(news => news?.others?.is_today_pick === true);
            setCategoryNews(filterTodayNews);
            return;
        }
        else {
            const filterNews = categoryNewsData.filter(news => news.category_id === parseInt(id));
            setCategoryNews(filterNews);
        }
    }, [categoryNewsData, id])
    return (
        <div>
            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map(news => (
                        <NewsCard key={news.id} news={news}></NewsCard>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryNews;