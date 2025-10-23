import React, { useState } from 'react';
import { format } from 'date-fns';
import { BsJournalBookmark } from "react-icons/bs";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { GoShareAndroid } from "react-icons/go";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import ShareOnSocial from 'react-share-on-social';
const NewsCard = ({ news }) => {
    const [expanded, setExpanded] = useState(false);
    // Calculate stars
    const rating = parseFloat(news?.rating?.number) || 0;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    // Bookmarks
    const [bookmarked, setBookmarked] = useState(false);
    return (
        <div>
            <div className='grid grid-cols-1 mx-2  rounded-sm shadow-md'>
                <div className='flex bg-base-200'>
                    <img className='rounded-full max-w-1/12 p-3' src={news.author.img} alt="" />
                    <div className='flex flex-col justify-center'>
                        <p className='text-xs font-semibold text-base-400'>{news?.author?.name}</p>
                        <p className='text-xs text-accent'>{format(news?.author?.published_date, "yyyy-MM-dd")}</p>
                    </div>
                    <div className='flex gap-2 justify-end flex-1 items-center pr-3'>
                        <button className='btn btn-square' onClick={() => { setBookmarked(!bookmarked) }}>
                            {
                                bookmarked ?
                                    <BsFillJournalBookmarkFill size={18}></BsFillJournalBookmarkFill>
                                    :
                                    <BsJournalBookmark size={18}></BsJournalBookmark>

                            }
                        </button>
                        {/* <button className='btn btn-square' onClick={() => { setBookmarked(!bookmarked) }}>
                            <BsFillJournalBookmarkFill size={18}></BsFillJournalBookmarkFill>
                        </button> */}
                        <ShareOnSocial
                            textToShare="Check out this new wardrobe I just found from IKEA!"
                            link="https://ikea.com/wardrobes/kalle"
                            linkTitle="KALLE Wardorbe which chooses your clothes for you using AI - IKEA"
                            linkMetaDesc="Stop going through the agony of choosing clothes that fit the weather and your mood."
                            // linkFavicon={favicon}
                            // noReferer
                            shareTo={['Facebook', 'Linkedin', 'Reddit', 'Pocket', 'Tumblr', 'Whatsapp', 'Telegram', 'Email']}
                            showIcons={true}
                        >
                            <button className='btn btn-circle'>
                                <GoShareAndroid size={18} > </GoShareAndroid>
                            </button>
                        </ShareOnSocial>
                    </div>
                </div>
                <div className='flex flex-col gap-4 p-4'>
                    <h4 className='font-bold text-base-400'>{news?.title}</h4>
                    <img className='w-full mx-auto' src={news?.thumbnail_url} alt="" />
                    <span className={`${expanded ? '' : 'line-clamp-3'} transition-all text-sm/[26px] text-accent`}>
                        {news?.details}
                    </span>
                    <span>
                        {news?.details && (
                            <button
                                className="font-semibold hover:cursor-pointer bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent"
                                onClick={() => setExpanded(!expanded)}
                            >
                                {expanded ? 'Show Less' : 'Read More..'}
                            </button>
                        )}
                    </span>
                    <div className="divider !p-0 !m-0"></div>
                    <div className='flex justify-between mb-2'>

                        {/* Calculate stars based on rating */}
                        <div className='flex gap-1 items-center'>
                            {/* Render full stars */}
                            {[...Array(fullStars)].map((_, i) => (
                                <IoStar key={`full-${i}`} size={18} className='text-[#FF8C47]' />
                            ))}
                            {/* Render half star if needed */}
                            {hasHalfStar && <IoStarHalf size={18} className='text-[#FF8C47]' />}
                            {/* Render empty stars */}
                            {[...Array(emptyStars)].map((_, i) => (
                                <IoStarOutline key={`empty-${i}`} size={18} className='text-[#FF8C47]' />
                            ))}
                            <span className='text-accent text-sm font-semibold leading-none ml-1 align-middle'>
                                {rating.toFixed(1)}
                            </span>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <FaRegEye size={18} className='text-accent'></FaRegEye>
                            <p className='text-accent text-xs'>{news?.total_view}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewsCard;