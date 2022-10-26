import React from "react";
import moment from "moment/moment";
import { useState } from "react";
import { useEffect } from "react";
let interval;
function StopWatch() {
  const [started, setStarted] = useState(false);
  const [timer, setTimer] = useState();
  useEffect(() => {
    console.log("RENDEREd 22");
    setTimer(
      moment().set({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 })
    );
    return () => {
      // clearInterval(interval);
    };
  }, []);
  console.log("RENDERED");
  const resetTimer = () => {
    setStarted(false);
    clearInterval(interval);
    setTimer(
      moment().set({ hours: 0, minutes: 0, seconds: 0, milliseconds: 10 })
    );
  };
  const startTimer = () => {
    setStarted(true);
    interval = setInterval(() => {
      console.log(moment(timer).milliseconds());
      console.log("interval running");
      console.log(moment(timer).add(10, "milliseconds"));
      setTimer(moment(timer).add(10, "days"));
      console.log(moment(timer).millisecond());
    }, 10);
  };
  return (
    <div className="max-w-2xl flex flex-col gap-4 border-indigo-600 rounded-md p-4 border-2 justify-center items-center mx-auto">
      <div className="heading text-2xl text-center text-indigo-600 border-b-4 border-b-indigo-600">
        Stopwatch
      </div>
      <div className="content flex flex-row my-3 gap-2 content-center items-center font-bold">
        <div className="text-blue-600 text-2xl">
          {moment(timer).hours() + " H"}
        </div>
        <div className="text-2xl">:</div>
        <div className="text-blue-600 text-2xl">
          {moment(timer).minutes() + " M"}
        </div>
        <div className="text-2xl">:</div>
        <div className="text-blue-600 text-2xl">
          {moment(timer).seconds() + " S"}
        </div>
        <div className="text-2xl">:</div>
        <div className="text-blue-600 text-2xl">
          {moment(timer).milliseconds() + " MS"}
        </div>
      </div>
      <div className="flex flex-row justify-end gap-4 content-center items-end">
        <button
          className="bg-indigo-600 text-white font-bold px-5 py-3 rounded-full"
          onClick={resetTimer}
          disabled={started ? false : true}
        >
          Reset
        </button>
        <button
          className="bg-indigo-600 text-white font-bold px-5 py-3 rounded-full"
          onClick={startTimer}
          disabled={started ? true : false}
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default StopWatch;
