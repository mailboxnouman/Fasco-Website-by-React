import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../containers/deals.css';
import Btn from '../../../components/Btn';
import Carrosel from '../../../components/Carousel';

function Deals() {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-06-28') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault(); 
    navigate('/signin')
  };
  return (
    <div className="deals-m">
      <div className="deals-main" id='deals'>
        <div className="deals-txt">
          <h1>Deals Of The Month</h1>
          <p className='deals-para1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>
         <div className='deals-btn'> 
            <Btn btn="Buy Now" onClick={handleSubmit} />
           </div>
          <p className='deals-para2'>Hurry, Before It’s Too Late!</p>
          <div className="timer">
            <div className="days">{formatTime(timeLeft.days)}  </div>
            <div className="hr">{formatTime(timeLeft.hours)}  </div>
            <div className="mins">{formatTime(timeLeft.minutes)} </div>
            <div className="sec">{formatTime(timeLeft.seconds)} </div>
          </div>
          <div className="time-info">
            <p>Days</p>
            <p>Hr</p>
            <p>Mins</p>
            <p>Sec</p>
          </div>
        </div>
        <div className="deals-img">
          <div className="carroselBox">
            <Carrosel />
          </div>
        </div>
\      </div>
    </div>
  );
}

export default Deals;
