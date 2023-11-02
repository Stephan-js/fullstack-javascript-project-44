#!/usr/bin/env node

import readlineSync from 'readline-sync'; // take readline-sync to see your answ
import {
  myCheackNumbAnsw,
  getNumb,
  getSing,
  getStart,
} from './functions.js';

function getRightAnsw(singA, numbA, numb1A) {
  if (singA === '-') {
    return numbA - numb1A;
  }
  if (singA === '+') {
    return numbA + numb1A;
  }
  return numbA * numb1A;
}

function calculateGame(userNameForGame) { // game || function
  console.log('What is the result of the expression?'); // welcome logo
  for (let i = 0; i < 3; i += 1) {
    const numb = getNumb();
    const numb1 = getNumb();
    const sing = getSing(); // get all things
    console.log(`Question: ${numb} ${sing} ${numb1}`); // qustion

    const userAnsw = readlineSync.question('Your answer: ');
    const rightAnsw = getRightAnsw(sing, numb, numb1);

    if (myCheackNumbAnsw(userAnsw, rightAnsw, userNameForGame)) {
      return;
    }
  }
  console.log(`Congratulations, ${userNameForGame}!`); // win
}

const userName = getStart();

calculateGame(userName); // start game
