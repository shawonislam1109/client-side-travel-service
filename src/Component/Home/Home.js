import React from 'react';
import MyService from '../../Shared/Myservice/MyService';
import Section1 from '../../Shared/section/Section1';
import Slider from '../../Shared/Slider/Slider';
import HomeReview from '../Review/HomeReview';
import WorkExpre from '../workExperiance/WorkExpre';

const Home = () => {
    return (
        <div>

            <Slider></Slider>
            <Section1 />
            <MyService></MyService>
            <HomeReview></HomeReview>
            <WorkExpre />
        </div>
    );
};

export default Home;