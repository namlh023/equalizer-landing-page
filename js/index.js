let subscription = document.querySelector(".js-subscription");

function addOrRemoveContainer() {
  if (window.innerWidth >= 768) {
    subscription.classList.add("container");
  } else {
    subscription.classList.remove("container");
  }
}

window.addEventListener("resize", addOrRemoveContainer);

window.addEventListener("DOMContentLoaded", addOrRemoveContainer);
