import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  const changeTime = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const tick = setInterval(() => {
      changeTime();
    }, 1000);
    return () => clearInterval(tick);
  });
  return <div>It is {time.toLocaleTimeString()}</div>;
}

export default Clock;
