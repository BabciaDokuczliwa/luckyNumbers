import React from "react";
import { useState } from "react";
import "./style.css"
function RandomLuckyNumbers() {
  const [luckyNumbers, setLuckyNumbers] = useState([]);
  const [one, setOne] = useState([]);
  function generateLuckyNumbers() {
    const numArr = [];
    while (numArr.length < 6) {
      const lottery = Math.floor(Math.random() * 50);
      if (numArr.indexOf(lottery) === -1) {
        numArr.push(lottery);
      }
    }
    setLuckyNumbers(numArr);
    console.log(luckyNumbers);
  }
  function OneNumber() {
    const oneNumber = Math.floor(Math.random() * 11);
    setOne(oneNumber);
    console.log(one);
  }
  function reset () {
 setOne([])
 setLuckyNumbers([])
  }
  
  return (
    <div>
        <h1>Lotto 6/49</h1>
        <h3>Generating lucky numbers</h3>
        <ul>
            {
                luckyNumbers.map((number, idx)=> {
                   return <li key={idx}>{number}</li>
                })
            }
            <li>{one}</li>
        </ul>
      <button
        onClick={() => {
          generateLuckyNumbers();
          OneNumber();
        }}
      >
        add random numbers
      </button>
      <button onClick={()=> reset()}>Reset</button>
    </div>
  );
}

export default RandomLuckyNumbers;
