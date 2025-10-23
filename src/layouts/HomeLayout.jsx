import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import LatestNews from '../components/LatestNews';
import NavBar from '../components/NavBar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-10/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-10/12 mx-auto'>
                    <NavBar></NavBar>
                </nav>

            </header>

            <main className='w-10/12 mx-auto grid grid-cols-12'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="mid_nav col-span-6">
                    <Outlet> </Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;