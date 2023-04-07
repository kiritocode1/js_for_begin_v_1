import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))



// make a clock in js 
const clock = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let time = ` <h1>
  
  time in pakistan : ${24 - hours}:${60 - minutes}:${60 - seconds}</h1>`;
  document.getElementById('app').innerHTML = time;
  setTimeout(clock, 1000);

};
clock();

//make a proper quicksort algorithm in js
const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

//make a sql request in js
const sql = (arr) => {
  let sql = 'SELECT * FROM table WHERE ';
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      sql += `name = '${arr[i]}'`;
    } else {
      sql += `name = '${arr[i]}' OR `;
    }
  }
  return sql;
}










//  we use js to make web applications. 

// js has no rules . 

('b' + 'a' + + 'a' + 'a').toLowerCase()




// js is a dynamic language










// js is a loosely typed language
// js is a interpreted language
// js is a object oriented language
// js is a functional language
// js is a prototype based language
// js is a single threaded language
// js is a non blocking language
// js is a garbage collected language
// js is a high level language
// js is a scripting language