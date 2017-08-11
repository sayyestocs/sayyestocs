// function show-blue-background() {
//   document.body.style.background = LightSkyBlue;
// }
// var a = document.getElementById('blue-background-tag');
// var b = document.getElementById('green-background-tag');
// var c = document.getElementById('red-background-tag');
// var d = document.getElementById('purple-background-tag');
// var x = document.getElementById('background');


function blueBackground(a,b,c,d,x) {
  var a = document.getElementById('blue-background-tag');
  var b = document.getElementById('green-background-tag');
  var c = document.getElementById('red-background-tag');
  var d = document.getElementById('purple-background-tag');
  var x = document.getElementById('background');
  if (a.style.display === 'block') {
      a.style.display = 'none';
      x.style.backgroundColor = "white";
  } else {
      a.style.display = 'block';
      b.style.display = 'none';
      c.style.display = 'none';
      d.style.display = 'none';
      x.style.backgroundColor = "LightSkyBlue";
  }
}

function greenBackground(a,b,c,d) {
  var a = document.getElementById('blue-background-tag');
  var b = document.getElementById('green-background-tag');
  var c = document.getElementById('red-background-tag');
  var d = document.getElementById('purple-background-tag');
  var x = document.getElementById('background');
  if (b.style.display === 'block') {
    b.style.display = 'none';
      x.style.backgroundColor = "white";
  } else {
    b.style.display = 'block';
    a.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'none';
    x.style.backgroundColor = "LightGreen";
  }
}

function redBackground(a,b,c,d) {
  var a = document.getElementById('blue-background-tag');
  var b = document.getElementById('green-background-tag');
  var c = document.getElementById('red-background-tag');
  var d = document.getElementById('purple-background-tag');
  var x = document.getElementById('background');
  if (c.style.display === 'block') {
    c.style.display = 'none';
      x.style.backgroundColor = "white";
  } else {
    c.style.display = 'block';
    a.style.display = 'none';
    b.style.display = 'none';
    d.style.display = 'none';
    x.style.backgroundColor = "LightCoral";
  }
}

function purpleBackground(a,b,c,d) {
  var a = document.getElementById('blue-background-tag');
  var b = document.getElementById('green-background-tag');
  var c = document.getElementById('red-background-tag');
  var d = document.getElementById('purple-background-tag');
  var x = document.getElementById('background');
  if (d.style.display === 'block') {
    d.style.display = 'none';
      x.style.backgroundColor = "white";
  } else {
    d.style.display = 'block';
    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'none';
    x.style.backgroundColor = "Violet";
  }
}

// function show-blue-background() {
//   var tag_list = document.getElementsByClassName('open-blue-background-tag');
//   for (i = 0; i < tag_list.length; i++) {
//       if (document.body.style.background === 'block') {
//           document.body.style.background = 'none';
//       } else {
//           document.body.style.background = 'block';
//       }
//   }
// }
