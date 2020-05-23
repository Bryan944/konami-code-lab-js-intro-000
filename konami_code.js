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




let index = 0;
 
function cheatCodes(codes) {
  const key = codes.key;
 
  if (key === codes[index]) {
    index++;
 
    if (index === codes.length) {
      alert("Hurray!");
    }
  } else {
    index = 0;
  }
}