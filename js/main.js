/* Author: Mauricio Quiñones Díaz (Tulkas)*/

/* const { plugins, Legend } = require("chart.js");
 */
/* const { plugins, Legend } = require("https://cdn.jsdelivr.net/npm/chart.js");
const { plugins, Legend } = require("chart.js"); */

Chart.defaults.color = '#ffffff'

let arcsine = document.getElementById("arcsineTotalError")
/* console.log(arcsine) */
let pArcsine = document.getElementById("pArsineError")
/* console.log(pArcsine) */

let arccosine = document.getElementById("arccosineTotalError")
/* console.log(arccosine) */
let pArccosine = document.getElementById("pArccosineError")
/* console.log(pArccosine) */

let squareRoot = document.getElementById("squareTotalError")
/* console.log(squareRoot) */
let pSquareRoot = document.getElementById("pSquareError")
/* console.log(pSquareRoot) */

let division = document.getElementById("divisionTotalError")
/* console.log(division) */
let pDivision = document.getElementById("pDivisionError")
/* console.log(pDivision) */

let log = document.getElementById("logTotalError")
/* console.log(log) */
let pLog = document.getElementById("pLogError")
/* console.log(pLog) */

/* Var for random numbers between -1 and 1*/
let a = 0
let b = 0
let c = 0
let d = 0
let e = 0
let g = 0
let h = 0
let j = 0
let k = 0

/* Var error counters */
let arcsineError = 0
let arccosineError = 0
let squareRootError = 0
let divisionError = 0
let logError = 0
let canDoIt = 0
/* Var % error */
let pArcsineError = 0
let pArccosineError = 0
let pSquareRootError = 0
let pDivisionError = 0
let pLogError = 0
let pCanDoIt = 0
const pError = []

/* Listen event click on button */
const button = document.getElementById("btnCalError");

/* Refresh */
const refreshButton = document.getElementById('refresh');

/* cycleTimes */
const cycleTimes = 1000

/* CHART */
const printChart = () => {

  renderModelChart()
}

const renderModelChart = () => {
  
    const data = {
      labels: ['Arcseno', 'Arccoseno', 'Raíz', 'División', 'Log'],
      datasets: [
        {
          data: pError,
          borderColor: getDataColors(),
          backgroundColor: getDataColors(30),
          hoverOffset: 20,             
        }
      ]
    }
  
    const options = {
      plugins: {
        legend: {position: 'top'}  
      }    
    }  

  new Chart('myChart', { type: 'doughnut', data, options})
}

/* equation conditional 1000*/
for (var i = 1; i <= cycleTimes; i++) {
  /* Random num between -1 and 1 */
  a = parseFloat((Math.random() * 2 - 1).toFixed(2));
  b = parseFloat((Math.random() * 2 - 1).toFixed(2));
  c = parseFloat((Math.random() * 2 - 1).toFixed(2));
  d = parseFloat((Math.random() * 2 - 1).toFixed(2));
  e = parseFloat((Math.random() * 2 - 1).toFixed(2));
  g = parseFloat((Math.random() * 2 - 1).toFixed(2));
  h = parseFloat((Math.random() * 2 - 1).toFixed(2));
  j = parseFloat((Math.random() * 2 - 1).toFixed(2));
  k = parseFloat((Math.random() * 2 - 1).toFixed(2));

  /* console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)
  console.log(e)
  console.log(g)
  console.log(h)
  console.log(j)
  console.log(k)
 */

  /* 1st division */
  if (b == 0) {
    divisionError++;
  } else if (d == 0) {
  /* 2nd division */
    divisionError++;
  } else if (((a / b) + (c / d)) < -1 || ((a / b) + (c / d)) > 1) {
  /* 1st arccosine */
    arccosineError++;
  } else if ((Math.log(e) - Math.asin(g)) == 0) {
  /* 3rd division */
    divisionError++;
  } else if (Math.log(e) == -1) {
  /* 1st log */
    logError++;
  } else if ((g < -1) || (g > 1)) {
  /* 1st arcsine */
    arcsineError++;
  } else if ((Math.log(e) - Math.asin(g)) <= 0) {
  /* 1st square root */
    squareRootError++;
  } else if (h == -1) {
  /* 2nd log */
    logError++;
  } else if ((i < -1) || (i > 1)) {
  /* 2nd arccosine */
    arccosineError++;
  } else if ((j < -1) || (j > 1)) {
  /* 2nd arsine */
    arcsineError++;
  } else canDoIt++;
  /* i(image) = j(code) and j(image) = k(code)*/

  pArcsineError = parseFloat((arcsineError / cycleTimes) * 100).toFixed(2)
  pArccosineError = parseFloat((arccosineError / cycleTimes) * 100).toFixed(2)
  pSquareRootError = parseFloat((squareRootError / cycleTimes) * 100).toFixed(2)
  pDivisionError = parseFloat((divisionError / cycleTimes) * 100).toFixed(2)
  pLogError  = parseFloat((logError / cycleTimes) * 100).toFixed(2)
}

pError.push(pArcsineError, pArccosineError, pSquareRootError, pDivisionError, pLogError)

/* Listen event click on button */
button.addEventListener("click", calError)
/* button.addEventListener('click', calError => {
  location.reload()
}) */

/* Listen event refresh button */
refreshButton.addEventListener('click', refresh)

/* Button to innerHTML */
function calError() {
  arcsine.innerHTML = arcsineError
  arccosine.innerHTML = arccosineError
  squareRoot.innerHTML = squareRootError
  division.innerHTML = divisionError
  log.innerHTML = logError

  pArcsine.innerHTML = pArcsineError
  pArccosine.innerHTML = pArccosineError
  pSquareRoot.innerHTML = pSquareRootError
  pDivision.innerHTML = pDivisionError
  pLog.innerHTML = pLogError

  printChart()
}

/* console.log(arcsineError)
console.log(arccosineError)
console.log(squareRootError)
console.log(divisionError)
console.log(logError)

console.log(pArcsineError)
console.log(pArccosineError)
console.log(pSquareRootError)
console.log(pDivisionError)
console.log(pLogError) */

/* Refresh */
function refresh() {
  location.reload()
}