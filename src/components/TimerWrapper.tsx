import React, { FunctionComponent } from "react";
import Timer from "react-compound-timer";
import { TimerControls } from "react-compound-timer";
import Play from "../images/play-circle.svg";
import Pause from "../images/pause-circle.svg";
import Reset from "../images/refresh-cw.svg";
import Dice from "../images/homemade-dice.svg";
import { ArrowComponent } from "../components/Arrows";

function getRandomArbitraryFloor(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

type TimerWrapperProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const TimerWrapper: FunctionComponent<TimerWrapperProps> = ({
  handleClick,
  children,
}) => {
  return (
    <div className="timer">
      <div className="arrow-container">
        {Array(getRandomArbitraryFloor(1, 4)).fill(<ArrowComponent />)}
      </div>

      <Timer
        initialTime={60000}
        direction="backward"
        startImmediately={false}
        timeToUpdate={100}
      >
        {({ start, pause, reset }: TimerControls) => (
          <React.Fragment>
            <div style={{ display: "inline-block", height: "max-content" }}>
              <Timer.Minutes />:
              <Timer.Seconds
                formatValue={(value: number) => {
                  if (value > 10) {
                    return value.toString();
                  } else {
                    return `0${value}`;
                  }
                }}
              />
            </div>

            <div className="button-container">
              <button onClick={start}>
                <img src={Play} alt="Start"></img>
              </button>
              <button onClick={pause}>
                <img src={Pause} alt="Pause"></img>
              </button>
              <button onClick={reset}>
                <img src={Reset} alt="Reset"></img>
              </button>
              <button onClick={handleClick}>
                <img
                  src={Dice}
                  alt="Roll"
                  style={{ height: 24, width: 24 }}
                ></img>
              </button>
            </div>
          </React.Fragment>
        )}
      </Timer>
    </div>
  );
};
