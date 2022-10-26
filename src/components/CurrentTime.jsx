import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment";
function CurrentTime() {
  const [option, setOption] = useState("24");
  const toggleTimeFormat = () => {
    setOption(option === "24" ? "12" : "24");
  };
  const Time = () => {
    const [currentTime, setTime] = useState(moment());
    const time = {
      hours: moment(currentTime).format("h"),
      minutes: moment(currentTime).minutes(),
      seconds: moment(currentTime).seconds(),
      fullHours: moment(currentTime).format("H"),
      xm: moment(currentTime).format("A"),
    };

    useEffect(() => {
      setInterval(() => {
        setTime(Date.now());
      }, 1000);
      return () => {
        clearInterval("changeTime");
      };
    }, []);

    return (
      <div className="container text-center content-center items-center flex flex-col gap-3 justify-center mb-2 ">
        <div className="p-3  text-center content-center items-center flex flex-col gap-3 justify-center  mx-3 py-2">
          <div className="heading text-3xl font-medium text-blue-600 border-b-4 border-b-blue-600">
            Current Date
          </div>
          <div className="hours text-3xl font-medium text-slate-900 ">
            {moment(currentTime).format("MMMM Do YYYY")}
          </div>
        </div>
        {option === "24" ? (
          <div className="flex flex-col gap-2 items-center mx-3 py-2">
            <div className="heading text-3xl font-medium text-blue-600 border-b-4 border-b-blue-600">
              Current Time
            </div>
            <div className="p-3  text-center content-center items-center flex flex-row gap-3 justify-center">
              <div className="hours text-3xl font-medium text-slate-900 ">
                {time.fullHours + " Hours"}
              </div>
              <div className="separator text-2xl">:</div>
              <div className="hours text-3xl font-medium text-slate-900">
                {time.minutes + " Minutes"}
              </div>
              <div className="separator text-2xl">:</div>

              <div className="hours text-3xl font-medium text-slate-900">
                {time.seconds + " sec"}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2 items-center  mx-3 py-2 ">
            <div className="heading text-3xl font-medium text-blue-600 border-b-4 border-b-blue-600">
              Current Time
            </div>
            <div className="p-3 container text-center content-center items-center flex flex-row gap-3 justify-center">
              <div className="hours text-3xl font-medium text-slate-900 ">
                {time.hours + " Hours"}
              </div>
              <div className="separator text-2xl">:</div>
              <div className="hours text-3xl font-medium text-slate-900">
                {time.minutes + " Minutes"}
              </div>
              <div className="separator text-2xl">:</div>

              <div className="hours text-3xl font-medium text-slate-900">
                {time.seconds + " sec"}
              </div>
              <div className="hours text-3xl font-medium text-slate-900">
                {time.xm + " "}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="container flex flex-col justify-center items-center gap-3 max-w-md m-auto py-4 border-4 my-4 border-blue-600 rounded-lg">
      <div className="heading text-3xl font-medium text-blue-600 border-2 border-blue-600 rounded-full p-2">
        Current Date & Time
      </div>
      <Time />
      <div className="relative">
        <button
          className="bg-blue-600 hover:bg-blue-800 rounded-full p-3 text-white font-bold"
          onClick={toggleTimeFormat}
        >
          Toggle 24 Hour / AM PM Format
        </button>
      </div>
    </div>
  );
}

export default CurrentTime;
