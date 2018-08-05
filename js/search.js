t = true;
var icon = document.getElementById("icon");
var input = document.getElementById("search-input");

function search() {
  if (t == true) {
    icon.style.display = "none";
    input.style.display = "block";
    // input.className = input.className.replace(" now-out", " now-active");
    t = false;
  } else {
    icon.style.display = "block";
    input.style.display = "none";
    // input.className = input.className.replace(" now-active", " now-out");
    t = true;
  }
}
