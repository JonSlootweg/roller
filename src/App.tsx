import React, { useState } from "react";
import "./App.css";
import { Container } from "./components/Container";
import { Roll } from "./components/Roll";
import { TimerWrapper } from "./components/TimerWrapper";
import { shuffle, getRandomArbitraryFloor, getRandomArbitrary } from '../src/utils/util-functions'


function setupAnimationVariables() {
  let curGtc = getComputedStyle(document.documentElement) //get the current value of the css variable
    .getPropertyValue("--gtc-random");

  let curGtcArr = curGtc.split(" ");
  let clone = [...curGtcArr];
  let clone2 = [...curGtcArr];
  let clone3 = [...curGtcArr];
  let clone4 = [...curGtcArr];
  let clone5 = [...curGtcArr];

  clone[
    getRandomArbitraryFloor(1, curGtcArr.length)
  ] = `${getRandomArbitraryFloor(150, 600)}fr`;

  document.documentElement.style.setProperty("--gtc-animate", clone.join(" "));

  clone2[
    getRandomArbitraryFloor(1, curGtcArr.length)
  ] = `${getRandomArbitraryFloor(150, 600)}fr`;

  document.documentElement.style.setProperty(
    "--gtc-animate2",
    clone2.join(" ")
  );

  clone3[
    getRandomArbitraryFloor(1, curGtcArr.length)
  ] = `${getRandomArbitraryFloor(150, 600)}fr`;

  document.documentElement.style.setProperty(
    "--gtc-animate3",
    clone3.join(" ")
  );

  clone4[
    getRandomArbitraryFloor(1, curGtcArr.length)
  ] = `${getRandomArbitraryFloor(150, 600)}fr`;

  document.documentElement.style.setProperty(
    "--gtc-animate4",
    clone4.join(" ")
  );

  const winner = getRandomArbitraryFloor(1, 40);

  clone5[winner] = "4000fr";

  document.documentElement.style.setProperty(
    "--gtc-animate5",
    clone5.join(" ")
  );
}

const colorArray = ["#ff9aa2", "#b5ead7", "#fff5ba", "#afcbff"];

function randArray() {
  const arr = [];
  type arrObj = {
    index: number;
    color: string;
  };
  const colCount = 40;

  for (let i = 0; i < colCount; i++) {
    let curGtc = getComputedStyle(document.documentElement) //get the current value of the css variable
      .getPropertyValue("--gtc-random");

      document.documentElement.style.setProperty(
        "--gtc-random",
        `${curGtc} ${getRandomArbitrary(5.0, 25.0)}fr` //each column takes up random fraction of the page
      );

    let curColor = '';

    if (i < 10) {
      curColor = colorArray[0];
    } else if (i < 20){
      curColor = colorArray[1];
    } else if (i < 30) {
      curColor = colorArray[2];
    } else if (i < 40) {
      curColor = colorArray[3];
    }

    const spcArrObj = {
      index: i,
      color: curColor
    } as arrObj;

    arr.push(spcArrObj);
  }

  return shuffle(arr);
}

let colArray = randArray();

function App() {
  const [showTimer, setShowTimer] = useState(false);
  const [showDice, setShowDice] = useState(true);


  const roll = () => {
    setupAnimationVariables();
    const colContainer = document.getElementById("col-container")!;
    colContainer!.classList.remove("animated");
    void colContainer?.offsetWidth;

    document.getElementById("col-container")!.classList.add("animated");
    showTimer === true ? setShowTimer(false) : setShowTimer(true);
    setShowDice(false);
    
  };

  const showTime = () => {
    return showTimer === true ? <TimerWrapper handleClick={roll} /> : null;
  };

  const diceTime = () => {
    return showDice === true ? <Roll handleClick={roll} /> : null;
  };


  const onAnimationStart = () => {
    setShowTimer(false);
  };

  const onAnimationEnd = () => {
    setShowTimer(true);
  };

  return (
    <div className="App">
      <Container
        onAnimationStart={onAnimationStart}
        onAnimationEnd={onAnimationEnd}
        colArray={colArray}
      ></Container>
      {diceTime()}
      {showTime()}
    </div>
  );
}

export default App;
