import React from "react";
import Dice from "../images/2-Dice-Icon.svg";


type RollProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Roll = ({handleClick}: RollProps) => (
  <button className="roll-button" onClick={handleClick}>
    <img src={Dice} alt="Roll" style={{ height: 320, width: 320 }}></img>
  </button>
);
