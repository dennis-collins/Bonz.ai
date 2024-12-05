document.querySelector(".search-btn").addEventListener("click", myFunction);

function myFunction() {
  var x = document.getElementById("results");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  }
}
