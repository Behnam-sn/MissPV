t = true;

function search() {
  if (t == true) {
    document.getElementById("icon").style.display = "none";
    document.getElementById("search-input").style.display = "block";
    t = false;
  } else {
    document.getElementById("icon").style.display = "block";
    document.getElementById("search-input").style.display = "none";
    t = true;
  }
}
