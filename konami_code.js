const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  document.body.addEventListener('keydown', (event) =>{
      alert('Hurray');
  })
}


function triggerKeyDown(key) {
  const keyboardEvent = new KeyboardEvent("keydown", { key });
  document.body.dispatchEvent(keyboardEvent);
}
for (let i = 0, l = codes.length; i < l; i++) {
  triggerKeyDown(codes[i]);
}




function cheatCodes(codes) {
  const key = codes.key;
    if (  triggerKeyDown(codes[i]) === true) {
      alert("Hurray!");
  } else {
      index = 0;
  }
}
