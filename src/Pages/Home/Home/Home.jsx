import React from 'react';
import Banner from '../Banner/Banner';
import Classes from '../Classes/Classes';
import Instructors from '../Instructors/Instructors';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Classes></Classes>
            <Instructors></Instructors>
            <CountdownTimer></CountdownTimer>
        </div>
    );
};

export default Home;