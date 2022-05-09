import React, {useEffect, useState} from 'react';

const Timer = ({productState, time}) => {
    const calculateTimeLeft = () => {
        const now = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
        const utc = new Date(time);
        const difference = +utc - +now;
        let timeLeftObj = {}
        timeLeftObj = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24) < 10 ? '0' +
                Math.floor((difference / (1000 * 60 * 60)) % 24) : Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60) < 10 ? '0' +
                Math.floor((difference / 1000 / 60) % 60) : Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60) < 10 ? '0' +
                Math.floor((difference / 1000) % 60) : Math.floor((difference / 1000) % 60)
        };
        return timeLeftObj;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

    })

    return (
        <>
            <div className={productState === 4 ? 'timer' : 'displayNone'}>
                <div className='timer__box'>
                    <p className='timer__number'>{timeLeft?.days}</p>
                    <p className='timer__description'>Days</p>
                </div>
                <p className='timer__doublePoint'>:</p>
                <div className='timer__box'>
                    <p className='timer__number'>{timeLeft?.hours}</p>
                    <p className='timer__description'>hours</p>
                </div>
                <p className='timer__doublePoint'>:</p>
                <div className='timer__box'>
                    <p className='timer__number'>{timeLeft?.minutes}</p>
                    <p className='timer__description'>minutes</p>
                </div>
                <p className='timer__doublePoint'>:</p>
                <div className='timer__box'>
                    <p className='timer__number'>{timeLeft?.seconds}</p>
                    <p className='timer__description'>seconds</p>
                </div>
                {/*{`${timeLeft?.hours}:${timeLeft?.minutes}:${timeLeft?.seconds}`}*/}
            </div>
            <p className={productState === 4 ? 'timer__subDate' : 'displayNone'}>Pre-Order 3/14 at 8:00 PM</p>
        </>
    );
};

export default Timer;
