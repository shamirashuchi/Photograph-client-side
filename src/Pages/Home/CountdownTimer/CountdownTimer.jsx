import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const CountdownTimer = () => {
  const summerCampDate = new Date('2023-07-01T09:00:00Z');
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const updateCountdown = () => {
    const now = new Date().getTime();
    const timeRemaining = summerCampDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    setCountdown({ days, hours, minutes, seconds });
  };

  const countdownAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });

  return (
    <animated.div className="mt-10 ml-40 mr-40  py-10 countdown-section bg-black text-center text-white" style={countdownAnimation}>
      <h2 className="countdown-title text-3xl">Countdown to Summer Camp</h2>
      <div className="countdown-timer">
        <div className="countdown-item">
          <span className="countdown-value text-2xl">{countdown.days}</span>
          <span className="countdown-label text-2xl">Days</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value text-2xl">{countdown.hours}</span>
          <span className="countdown-label text-2xl">Hours</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value text-2xl">{countdown.minutes}</span>
          <span className="countdown-label text-2xl">Minutes</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value text-2xl">{countdown.seconds}</span>
          <span className="countdown-label text-2xl">Seconds</span>
        </div>
      </div>
    </animated.div>
  );
};

export default CountdownTimer;
