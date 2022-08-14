import React from "react";

const App = () => {
  const [isStarted, setIsStarted] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(true);

  React.useEffect(() => {
    let interval = null;

    if (isStarted && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isStarted, isPaused]);

  const handleStart = () => {
    setIsStarted(true);
    setIsPaused(false);
  };

  const handleStop = () => {
    setIsPaused(true);
  };

  const handleReset = () => {
    setIsStarted(false);
    setTime(0);
  };

  return (
    <div className="container">
      <div className="stopwatch">
        <div className="content">
          <h1>Stopwatch</h1>
          <p className="timer">
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
          </p>
          <div className="button-group">
            <button onClick={handleStart} disabled={isStarted && !isPaused}>
              Start
            </button>
            <button onClick={handleStop} disabled={isPaused || time === 0}>
              Stop
            </button>
            <button onClick={handleReset} disabled={time === 0 ? true : false}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
