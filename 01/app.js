const btn = document.querySelector("button");
btn && btn.addEventListener("click", showBtnStatus);

function showBtnStatus() {
  console.log("clicked");
}
