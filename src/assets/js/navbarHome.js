window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("header").style.height = "80px";
    document.getElementById("header").style.background = "#000";
  } else {
    document.getElementById("header").style.height = "100px";
    document.getElementById("header").style.background = "transparent";
  }
}
