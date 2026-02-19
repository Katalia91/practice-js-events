const divElementsList = document.querySelectorAll("div");
const bodyElement = document.body;

divElementsList.forEach(function (element) {
  element.addEventListener("click", addClass);
});

bodyElement.addEventListener("click", removeClass);

function addClass(e) {
  const element = e.currentTarget;
  setTimeout(function () {
    element.classList.add("clicked");
  }, 500);
}

function removeClass(e) {
  if (e.target === bodyElement) {
    divElementsList.forEach(function (div) {
      div.classList.remove("clicked");
    });
  }
}
