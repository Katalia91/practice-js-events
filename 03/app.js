const btnElementList = document.querySelectorAll("button");

btnElementList.forEach(function (btn) {
  btn.addEventListener("click", showStatus);
});

function showStatus(e) {
  console.log("clicked");
  e.currentTarget.innerText = "clicked";
  e.currentTarget.removeEventListener("click", showStatus);
}
