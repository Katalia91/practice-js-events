const btnElementList = document.querySelectorAll("button");

btnElementList.forEach(function (item) {
  item.addEventListener("click", showStatus);
});

function showStatus(e) {
  console.log("clicked");
  this.innerText = "clicked";
  this.removeEventListener("click", showStatus);
}
