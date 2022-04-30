import { Button } from "./Button";
import { Display } from "./Display";
import chronometer from "../utils/Chronometer";
import { useState } from "react";

export function Chronometer() {
  const [time, setTime] = useState("00:00:00");

  function start() {
    if (!chronometer.isRunning) {
      chronometer.start();
    }
  }
  function reset() {
    chronometer.reset();

    const date = new Date();
    date.setHours(0, 0, 0);

    setTime(date.toLocaleTimeString());
  }
  function pause() {
    if (chronometer.isRunning) {
      chronometer.pause();
    }
  }

  chronometer.onChange = (time: number) => {
    const date = new Date();
    date.setHours(0, 0, time);

    setTime(date.toLocaleTimeString());
  };

  return (
    <div
      className="chronometer"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr max-content",
        justifyItems: "center",
        gap: "1rem",
      }}
    >
      <Display time={time} />

      <div
        className="controls"
        style={{
          display: "grid",
          gridAutoColumns: "max-content",
          gridTemplateRows: "1fr",
          gridAutoFlow: "column",
          gap: "2rem",
        }}
      >
        <Button onClick={start} text="Start" />
        <Button onClick={reset} text="Reset" />
        <Button onClick={pause} text="Pause" />
      </div>
    </div>
  );
}
