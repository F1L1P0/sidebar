function toggleSidebar() {
  document.body.classList.toggle("open");
}

window.addEventListener("click", (e) => {
  if (!e.target.closest(".sidebar")) {
    document.body.classList.remove("open");
  }
});
