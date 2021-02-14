document.querySelectorAll(".faq__options").forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("active");
  });
});
