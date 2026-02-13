const divElement = document.querySelector("div");

if (divElement) {
  divElement.addEventListener("mouseover", function () {
    console.log("You hovered over a div!");
  });
  divElement.addEventListener("mouseleave", function () {
    console.log("You left the div!");
  });
}
