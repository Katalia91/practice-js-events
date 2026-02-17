const divElementsList = document.querySelectorAll("div");
const bodyElement = document.body;

divElementsList.forEach(function (div) {
  div.addEventListener("click", addClass);
});

bodyElement.addEventListener("click", removeClass);

function addClass(e) {
  e.currentTarget.classList.add("clicked");
}
function removeClass(e) {
  if (e.target === bodyElement) {
    divElementsList.forEach(function (div) {
      div.classList.remove("clicked");
    });
  }
}
