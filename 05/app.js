const stats = {
  paragraphs: {
    p1: 0,
  },
  links: {
    "/dolor.html": 0,
  },
};

/* tutaj umieść swój kod */
const linkElementList = document.querySelectorAll(".link");
const textElementList = document.querySelectorAll(".text");

textElementList.forEach(function (item) {
  item.addEventListener("click", countClicks);
});

/* Funkcja, która ma za zadanie zliczać kliknięcia */
function countClicks(e) {
  e.preventDefault();
  if (e.target.tagName.includes("A")) {
    let hrefAttr = e.target.getAttribute("href");
    if (stats.links[hrefAttr] !== undefined) {
      stats.links[hrefAttr]++;
    }
  } else if (e.target.tagName.includes("P")) {
    let dataAttr = e.target.dataset.id;
    if (stats.paragraphs[dataAttr] !== undefined) {
      stats.paragraphs[dataAttr]++;
    }
  }
}

/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector(".stats");
const fireCustomEvent = function (element, name) {
  console.log(element, "=>", name);

  const event = new CustomEvent(name, {
    bubbles: true,
  });

  element.dispatchEvent(event);
};

const renderStats = function (data, element) {
  let html = "";

  for (let elementType in data) {
    html += "<ul>";

    for (let key in data[elementType]) {
      html += "<li>";
      html += key + " -> " + data[elementType][key];
      html += "</li>";
    }

    html += "</ul>";
  }

  element.innerHTML = html;
};

document.addEventListener("click", function (e) {
  const tagName = e.target.tagName;

  if (tagName.includes("P") || tagName.includes("A")) {
    fireCustomEvent(statsElement, "render");
  }
});
statsElement.addEventListener(
  "render",
  renderStats.bind(this, stats, statsElement),
);
document.addEventListener(
  "DOMContentLoaded",
  fireCustomEvent.bind(null, statsElement, "render"),
);
