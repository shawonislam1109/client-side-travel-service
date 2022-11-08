import React from 'react';
import MyService from '../../Shared/Myservice/MyService';
import Section1 from '../../Shared/section/Section1';
import Slider from '../../Shared/Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Section1 />
            <MyService></MyService>
        </div>
    );
};

export default Home;