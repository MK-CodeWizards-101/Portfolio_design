const header = document.querySelector(".header")
const ham = document.querySelector(".Ham")
const hamIcon = document.querySelector(".Ham-icon")

ham.addEventListener("click", function() {
  header.classList.toggle("header-mobile")

  if (header.classList.contains("header-mobile")) {
    hamIcon.src ="./images/Ham-close.svg"
  } else {
    hamIcon.src ="./images/Ham.svg"
  }
})