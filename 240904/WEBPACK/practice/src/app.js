import "./styles.css";
import rickdom from "./rickdom.jpg";

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `<img src="${rickdom}">`;
});

function plus(a, b) {
  console.log("ㅎㅇㅎㅇ");
  return a + b;
}
console.log(plus(333, 444));
