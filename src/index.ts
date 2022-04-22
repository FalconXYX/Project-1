function main() {
  let posarray = [];

  posarray.push(picknext());
  for (let i = posarray.length; i > 0; i--) {
    let inputnum = getinput();
    if (inputnum != posarray[i]) {
      return false;
    }
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
