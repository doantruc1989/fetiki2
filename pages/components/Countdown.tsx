import React from "react";
import Countdown from "react-countdown";

const CountdownComp = () => {
  const Completionist = () => <p>You are good to go!</p>;
  const renderer = ({hours , minutes, seconds, completed } : any) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="flex items-center text-base md:text-xl md:ml-4 mx-1 text-white">
          <p className="bg-red-500 px-2 rounded-md ">0{hours}</p>
          <p className="mx-1 text-gray-800">:</p>
          <p className="bg-red-500 px-2 rounded-md ">{minutes}</p>
          <p className="mx-1 text-gray-800">:</p>
          <p className="bg-red-500 px-2 rounded-md ">{seconds}</p>
        </div>
      );
    }
  };
  return (
    <Countdown
      date={Date.now() + 1000 * 60 * 60 * 3}
      zeroPadTime={2}
      renderer={renderer}
    ></Countdown>
  );
};

export default CountdownComp;
