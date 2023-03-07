function openNav() {
  document.getElementById("sidebarNav").style.width = "60%";
  document.getElementById("body").style.filter = "grayscale(50%)";
}

function closeNav() {
  document.getElementById("sidebarNav").style.width = "0%";
  document.getElementById("body").style.filter = "grayscale(0%)";
}
