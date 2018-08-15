//Tabs
var login = document.getElementById("login");
var signup = document.getElementById("signup");

//Buttons
var log = document.getElementById("log");
var sign = document.getElementById("sign");

function showTab(n) {
  var i = n;
  if (i == 0) {
    login.className = "tab-active";
    // log.className = "flex-fill tab-active-button";
    signup.className = "tab-deactive";
    // sign.className = "flex-fill tab-deactive-button";
  } else {
    login.className = "tab-deactive";
    // log.className = "flex-fill tab-deactive-button";
    signup.className = "tab-active";
    // sign.className = "flex-fill tab-active-button";
  }
}

showTab(0);
