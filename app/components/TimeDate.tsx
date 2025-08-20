"use client";
import React, { useState, useEffect } from 'react';

const TimeDate: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    // Function to update the time
    const updateTime = () => {
      const currentTime = new Date().toLocaleTimeString();
      setTime(currentTime);
    };

    // Update time immediately
    updateTime();

    // Set up interval to update time every second
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup the interval when the component is unmounted
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return <div className='text-2xl'>Current Time: {time}</div>;
};

export default TimeDate;
