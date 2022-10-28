import React from "react";
import { useState } from "react";
import { useEffect } from "react";
let interval;
function StopWatch() {
  const [status, setStatus] = useState("reset");
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    ms: 0,
  });

  const addDays = () => {
    // setTimer((prev) => ({ ...prev, days: prev.days + 1 }));
    setTimer((prev) => {
      return { ...prev, days: prev.days + 1 };
    });
  };

  const addHours = () => {
    // if (timer.hours <= 23) {
    //   setTimer((prev) => ({ ...prev, hours: prev.hours + 1 }));
    // } else {
    //   setTimer((prev) => ({ ...prev, hours: 0 }));
    //   addDays();
    // }
    setTimer((prev) => {
      if (prev.hours <= 23) {
        return { ...prev, hours: prev.hours + 1 };
      } else {
        // addSeconds();
        addDays();
        return { ...prev, hours: 0 };
      }
    });
  };
  const addMinutes = () => {
    // if (timer.minutes <= 59) {
    //   setTimer((prev) => ({ ...prev, minutes: prev.minutes + 1 }));
    // } else {
    //   setTimer((prev) => ({ ...prev, minutes: 0 }));
    //   addHours();
    // }
    setTimer((prev) => {
      if (prev.minutes <= 59) {
        return { ...prev, minutes: prev.minutes + 1 };
      } else {
        // addSeconds();
        addHours();
        return { ...prev, minutes: 0 };
      }
    });
  };
  const addSeconds = () => {
    // if (timer.seconds <= 59) {
    //   setTimer((prev) => ({ ...prev, seconds: prev.seconds + 1 }));
    // } else {
    //   setTimer((prev) => ({ ...prev, seconds: 0 }));
    //   addMinutes();
    // }
    setTimer((prev) => {
      if (prev.seconds <= 59) {
        return { ...prev, seconds: prev.seconds + 1 };
      } else {
        // addSeconds();
        addMinutes();
        return { ...prev, seconds: 0 };
      }
    });
  };
  const addMS = () => {
    setTimer((prev) => {
      if (prev.ms <= 59) {
        return { ...prev, ms: prev.ms + 1 };
      } else {
        // addSeconds();
        addSeconds();
        return { ...prev, ms: 0 };
      }
    });
    // if (timer.ms <= 59) {
    //   setTimer((prev) => ({ ...prev, ms: prev.ms + 1 }));
    // } else {
    //   setTimer((prev) => ({ ...prev, ms: 0 }));
    //   addSeconds();
    // }
  };
  useEffect(() => {
    console.log("Rendered UseEffect");
    // setTimer({ days: 0, hours: 0, minutes: 0, seconds: 0, ms: 0 });
    return () => {
      clearInterval(interval);
    };
  }, []);
  console.log("RENDERED");
  const pauseTimer = () => {
    setStatus("paused");
    clearInterval(interval);
  };
  const resetTimer = () => {
    setStatus("reset");
    clearInterval(interval);
    setTimer({ days: 0, hours: 0, minutes: 0, seconds: 0, ms: 0 });
  };
  const startTimer = () => {
    setStatus("started");
    interval = setInterval(() => {
      console.log("interval running");
      addMS();
    }, 16.66);
  };
  return (
    <div className="max-w-xl flex flex-col gap-4 border-indigo-600 rounded-md p-4 m-4 border-2 justify-center items-center mx-auto">
      <div className="heading text-2xl text-center text-indigo-600 border-b-4 border-b-indigo-600">
        Stopwatch
      </div>
      <div className="content flex flex-row my-3 gap-2 content-center items-center font-bold">
        <div className="text-blue-600 text-2xl">{timer.days + " D"}</div>
        <div className="text-2xl">:</div>
        <div className="text-blue-600 text-2xl">{timer.hours + " H"}</div>
        <div className="text-2xl">:</div>
        <div className="text-blue-600 text-2xl">{timer.minutes + " M"}</div>
        <div className="text-2xl">:</div>
        <div className="text-blue-600 text-2xl">{timer.seconds + " S"}</div>
        <div className="text-2xl">:</div>
        <div className="text-blue-600 text-2xl">{timer.ms + " MS"}</div>
      </div>
      <div className="flex flex-row justify-end gap-4 content-center items-end">
        <button
          className={
            status === "started" || status === "paused"
              ? "bg-indigo-600 text-white font-bold px-5 py-3 rounded-full"
              : "opacity-50 cursor-not-allowed bg-indigo-600 text-white font-bold px-5 py-3 rounded-full"
          }
          onClick={resetTimer}
          disabled={status === "started" || status === "paused" ? false : true}
        >
          Reset
        </button>

        <button
          className={
            status === "started"
              ? "bg-indigo-600 text-white font-bold px-5 py-3 rounded-full"
              : "opacity-50 cursor-not-allowed bg-indigo-600 text-white font-bold px-5 py-3 rounded-full"
          }
          onClick={pauseTimer}
          disabled={status === "started" ? false : true}
        >
          Pause
        </button>
        <button
          className={
            status !== "started"
              ? "bg-indigo-600 text-white font-bold px-5 py-3 rounded-full"
              : "opacity-50 cursor-not-allowed bg-indigo-600 text-white font-bold px-5 py-3 rounded-full"
          }
          onClick={startTimer}
          disabled={status === "reset" || status === "paused" ? false : true}
        >
          Start
        </button>
      </div>
    </div>
  );
}
export default StopWatch;
