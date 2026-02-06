import React, { useEffect, useState } from "react";

const CountdownTimer = ({
  deadline,
  className = "",
  onCompleteContent = <div>Time is up!</div>,
}) => {
  const calculateTimeLeft = () => {
    const difference = new Date(deadline) - new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!timeLeft) return; // Stop when expired

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline, timeLeft]);

  if (!timeLeft) {
    return onCompleteContent;
  }

  return (
    <div
      className={`flex gap-4  justify-center items-center text-center ${className}`}
    >
      <div>
        <div className="text-2xl md:text-3xl font-bold">{timeLeft.days}</div>
        <div className="text-sm">days</div>
      </div>
      <div>
        <div className="text-2xl md:text-3xl  font-bold">{timeLeft.hours}</div>
        <div className="text-sm">hours</div>
      </div>
      <div>
        <div className="text-2xl md:text-3xl  font-bold">{timeLeft.minutes}</div>
        <div className="text-sm">min</div>
      </div>
      <div>
        <div className="text-2xl md:text-3xl  font-bold">{timeLeft.seconds}</div>
        <div className="text-sm">sec</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
