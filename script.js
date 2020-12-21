/* JavaScript for Experience Page to make cards appear as you scroll */

let elementsToShow = document.getElementsByClassName("show-on-scroll");

// Helper function from: http://stackoverflow.com/a/7557433/274826
function elementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  let rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}

let scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

function loop() {
  Array.from(elementsToShow).forEach(function (element) {
    if (elementInViewport(element)) {
      element.classList.remove("not-visible");
      element.classList.add("is-visible");
    } else {
      element.classList.remove("is-visible");
      element.classList.add("not-visible");
    }
  });

  scroll(loop);
}

loop();
