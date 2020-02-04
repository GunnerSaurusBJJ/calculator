let input = document.querySelector(".calculator__display");

function insert(num) {
  input.value = input.value + num;
}
function equal() {
  input.value = eval(input.value);
}
function clean() {
  input.value = "";
}
function back() {
  input.value = input.value.substring(0, input.value.length - 1);
}
