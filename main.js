const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// Callback Hell
/*
let animation = alice1.animate(aliceTumbling, aliceTiming);
animation.onfinish = alice2Tumble;

function alice2Tumble(result) {
  let animation = alice2.animate(aliceTumbling, aliceTiming);
  animation.onfinish = alice3Tumble;
}
function alice3Tumble(result) {
  alice3.animate(aliceTumbling, aliceTiming);
}
*/

// Promise chain:
/*
alice1.animate(aliceTumbling, aliceTiming).finished.then(
  (result) => alice2.animate(aliceTumbling, aliceTiming).finished.then(
  (result) => alice3.animate(aliceTumbling, aliceTiming)));
*/
