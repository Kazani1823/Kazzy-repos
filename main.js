//  SWIPER JS TESTIMONIAL SECTION //

const swiper = new Swiper(".swiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});


// SHOW MORE CONTENT //
const readMoreBtn = document.querySelector(".read-more");
const reamMoreContent = document.querySelector(".read-more-content");

readMoreBtn.addEventListener("click", () => {
  reamMoreContent.classList.toggle("show-content");
  if(reamMoreContent.classList.contains("show-content")){
    readMoreBtn.textContent = "Show less"
  } else {
    readMoreBtn.textContent = "Show more";
  }
})

// SHOW/HIDE SKILLS ITEMS //
const skillItem = document.querySelectorAll("section.skills .skill");

skillItem.forEach(skill => {
  skill.querySelector(".head").addEventListener("click", () => {
    skill.querySelector(".items").classList.toggle("show-items");
  })
})

// ADD BOX SHADOW ON SCROLL
window.addEventListener("scroll", () => {
  document.querySelector("nav").classList.toggle("show-box-shadow", window.scrollY > 0)
})