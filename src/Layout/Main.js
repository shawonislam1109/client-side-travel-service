import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';


const Main = () => {
    return (
        <div>
            <section className='Header'>
                <Header />
            </section>

            <section className='outlet'>
                <Outlet></Outlet>
            </section>

            <section className="footer">
                <Footer />
            </section>
        </div>
    );
};

export default Main;