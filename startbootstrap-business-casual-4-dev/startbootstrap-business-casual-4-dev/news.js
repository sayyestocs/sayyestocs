function showText() {
  var list = document.getElementsByClassName("text");
  for (i = 0; i < list.length; i++) {
    var x = list[i];
    x.style.display = "block";
  }
  var images = document.getElementsByClassName("d-block img-fluid w-100");
  for (i = 0; i < images.length; i++) {
    var y = images[i];
    y.style.transition = ".5s ease";
    y.style.filter = "brightness(50%)";
  }
}

function hideText() {
  var list = document.getElementsByClassName("text");
  for (i = 0; i < list.length; i++) {
    var x = list[i];
    x.style.display = "none";
  }
  var images = document.getElementsByClassName("d-block img-fluid w-100");
  for (i = 0; i < images.length; i++) {
    var y = images[i];
    y.style.transition = ".5s ease";
    y.style.filter = "brightness(100%)";
  }
}
