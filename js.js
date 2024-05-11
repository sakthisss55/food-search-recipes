document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("colorButton");
  const colors = ["#ff9999", "#99ff99", "#9999ff", "#ffff99", "#ff99ff", "#99ffff"];

  button.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
  });
});
    