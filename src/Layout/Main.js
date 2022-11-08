import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Section1 from '../Shared/section/Section1';
import Slider from '../Shared/Slider/Slider';


const Main = () => {
    return (
        <div>
            <section className='Header'>
                <Header />
            </section>

            <section className='outlet'>
                <Slider />
                <Section1 />
                <Outlet></Outlet>
            </section>

            <section className="footer">
                <Footer />
            </section>
        </div>
    );
};

export default Main;