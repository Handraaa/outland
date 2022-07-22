function myFunction() {
  const x = document.getElementById("navbar-list");
  if (x.className === "navbar-content") {
    x.className += " responsive";
  } else {
    x.className = "navbar-content";
  }
}
