const outPut = document.getElementById("calc");
function display(num) {
  outPut.value += num;
}
function Clear() {
  outPut.value = "";
}
function Delete() {
  outPut.value = outPut.value.slice(0, -1);
}
function calc() {
  try {
    outPut.value = eval(outPut.value);
  } catch (err) {
    outPut.value = "Error";
  }
}
