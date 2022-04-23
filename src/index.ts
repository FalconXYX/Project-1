function main() {
  let posarray = [];
  let gamehappening = true;
  while (gamehappening) {
    posarray.push(picknext());
    output(posarray);
    gamehappening = checkanswer(posarray);
  }
}

function picknext() {
  let i = Math.floor(Math.random() * 4) + 1;
  return i;
}
function getinput() {
  let num = 0;
  return num;
}
function checkanswer(parray) {
  let posarray = parray;
  for (let i = posarray.length; i > 0; i--) {
    let inputnum = getinput();
    if (inputnum != posarray[i]) {
      return false;
    } else {
      return true;
    }
  }
}
function output(parray) {
  let posarray = parray;
  for (let i = posarray.length; i > posarray.length; i++) {
    flashpart(posarray[i]);
  }
}
function flashpart(part: number) {
  return;
}
