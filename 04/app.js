const divElementsList = document.querySelectorAll("div");
const bodyElement = document.body;

divElementsList.forEach(function (element) {
  element.addEventListener("click", addClass);
});

bodyElement.addEventListener("click", removeClass);

function addClass(e) {
  const element = e.currentTarget;
  const delay = Number(element.dataset.time);
  setTimeout(function () {
    element.classList.add("clicked");
  }, delay);
}

function removeClass(e) {
  if (e.target === bodyElement) {
    divElementsList.forEach(function (div) {
      div.classList.remove("clicked");
    });
  }
}

document.querySelector(".child").addEventListener("click", logEvent);
document.querySelector(".parent").addEventListener("click", logEvent);
document.querySelector(".grandparent").addEventListener("click", logEvent);

function logEvent(e) {
  console.log("target:", e.target.className);
  console.log("currentTarget:", e.currentTarget.className);
  console.log("-----");
}
