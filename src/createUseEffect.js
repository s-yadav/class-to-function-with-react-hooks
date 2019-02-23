import React, { useRef, useState, useEffect } from "react";
import createEffect from "create-effect";

const useInterval = createEffect((handler, delay) => {
  const interval = setInterval(handler, delay);
  return () => {
    clearInterval(interval);
  };
});

export default function TestUseInteval() {
  const [delay, setDelay] = useState(1000);

  const [currentTime, updateTime] = useState(new Date().toLocaleTimeString());

  useInterval(() => {
    updateTime(new Date().toLocaleTimeString());
  }, delay);

  return (
    <div>
      {currentTime}{" "}
      <button onClick={() => setDelay(delay + 1000)}>Update Delay</button>
    </div>
  );
}
