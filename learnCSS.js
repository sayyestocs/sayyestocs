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

function greenBackground(a,b,c,d,x) {
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

function redBackground(a,b,c,d,x) {
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

function purpleBackground(a,b,c,d,x) {
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

function arvoFont() {
    var a = document.getElementById('arvo-tag');
    var b = document.getElementById('cinzel-tag');
    var c = document.getElementById('lora-tag');
    var d = document.getElementById('hind-tag');
    var tag_list = document.getElementsByClassName('sophie');
    for (i = 0; i < tag_list.length; i++) {
        var x = tag_list[i];
        console.log(x.style.fontFamily);
        if (x.style.fontFamily !== "Arvo") {
            x.style.fontFamily = "Arvo";
        } else {
            x.style.fontFamily = "times";
        }
    }
    if (a.style.display === 'block') {
        a.style.display = 'none';
    } else {
        a.style.display = 'block';
        d.style.display = 'none';
        b.style.display = 'none';
        c.style.display = 'none';
    }
}

function hindFont() {
    var a = document.getElementById('arvo-tag');
    var b = document.getElementById('cinzel-tag');
    var c = document.getElementById('lora-tag');
    var d = document.getElementById('hind-tag');
    // var x = document.getElementById('sophie');
    var tag_list = document.getElementsByClassName('sophie');
    for (i = 0; i < tag_list.length; i++) {
        var x = tag_list[i];
        console.log(x.style.fontFamily);
        if (x.style.fontFamily !== "Hind") {
            x.style.fontFamily = "Hind";
        } else {
            x.style.fontFamily = "times";
        }
    }
    if (d.style.display === 'block') {
        d.style.display = 'none';
    } else {
        d.style.display = 'block';
        a.style.display = 'none';
        b.style.display = 'none';
        c.style.display = 'none';
    }
}

function loraFont() {
    var a = document.getElementById('arvo-tag');
    var b = document.getElementById('cinzel-tag');
    var c = document.getElementById('lora-tag');
    var d = document.getElementById('hind-tag');
    var tag_list = document.getElementsByClassName('sophie');
    for (i = 0; i < tag_list.length; i++) {
        var x = tag_list[i];
        console.log(x.style.fontFamily);
        if (x.style.fontFamily !== "Lora") {
            x.style.fontFamily = "Lora";
        } else {
            x.style.fontFamily = "times";
        }
    }
    if (c.style.display === 'block') {
        c.style.display = 'none';
    } else {
        c.style.display = 'block';
        a.style.display = 'none';
        b.style.display = 'none';
        d.style.display = 'none';
    }
}

function cinzelFont() {
    var a = document.getElementById('arvo-tag');
    var b = document.getElementById('cinzel-tag');
    var c = document.getElementById('lora-tag');
    var d = document.getElementById('hind-tag');
    var tag_list = document.getElementsByClassName('sophie');
    for (i = 0; i < tag_list.length; i++) {
        var x = tag_list[i];
        console.log(x.style.fontFamily);
        if (x.style.fontFamily !== "Cinzel") {
            x.style.fontFamily = "Cinzel";
        } else {
            x.style.fontFamily = "times";
        }
    }
    if (b.style.display === 'block') {
        b.style.display = 'none';
    } else {
        b.style.display = 'block';
        a.style.display = 'none';
        c.style.display = 'none';
        d.style.display = 'none';
    }
}

function ten() {
    var a = document.getElementById('ten-tag');
    var b = document.getElementById('fifteen-tag');
    var c = document.getElementById('twenty-tag');
    var d = document.getElementById('twenty-five-tag');
    var tag_list = document.getElementsByClassName('sophie');
    for (i = 3; i < tag_list.length; i++) {
        var x = tag_list[i];
        if (x.style.fontSize !== "10px") {
            x.style.fontSize = "10px";
        } else {
            x.style.fontSize = "12px";
        }
    }
    if (a.style.display === 'block') {
        a.style.display = 'none';
    } else {
        a.style.display = 'block';
        b.style.display = 'none';
        c.style.display = 'none';
        d.style.display = 'none';
    }
}
function fifteen() {
    var a = document.getElementById('ten-tag');
    var b = document.getElementById('fifteen-tag');
    var c = document.getElementById('twenty-tag');
    var d = document.getElementById('twenty-five-tag');
    var tag_list = document.getElementsByClassName('sophie');
    for (i = 3; i < tag_list.length; i++) {
        var x = tag_list[i];
        if (x.style.fontSize !== "15px") {
            x.style.fontSize = "15px";
        } else {
            x.style.fontSize = "12px";
        }
    }
    if (b.style.display === 'block') {
        b.style.display = 'none';
    } else {
        b.style.display = 'block';
        a.style.display = 'none';
        c.style.display = 'none';
        d.style.display = 'none';
    }
}
function twenty() {
    var a = document.getElementById('ten-tag');
    var b = document.getElementById('fifteen-tag');
    var c = document.getElementById('twenty-tag');
    var d = document.getElementById('twenty-five-tag');
    var tag_list = document.getElementsByClassName('sophie');
    for (i = 3; i < tag_list.length; i++) {
        var x = tag_list[i];
        if (x.style.fontSize !== "20px") {
            x.style.fontSize = "20px";
        } else {
            x.style.fontSize = "12px";
        }
    }
    if (c.style.display === 'block') {
        c.style.display = 'none';
    } else {
        c.style.display = 'block';
        a.style.display = 'none';
        b.style.display = 'none';
        d.style.display = 'none';
    }
}
function twenty_five() {
    var a = document.getElementById('ten-tag');
    var b = document.getElementById('fifteen-tag');
    var c = document.getElementById('twenty-tag');
    var d = document.getElementById('twenty-five-tag');
    var tag_list = document.getElementsByClassName('sophie');
    for (i = 3; i < tag_list.length; i++) {
        var x = tag_list[i];
        if (x.style.fontSize !== "25px") {
            x.style.fontSize = "25px";
        } else {
            x.style.fontSize = "12px";
        }
    }
    if (d.style.display === 'block') {
        d.style.display = 'none';
    } else {
        d.style.display = 'block';
        a.style.display = 'none';
        b.style.display = 'none';
        c.style.display = 'none';
    }
}

function blueFont() {
    var a = document.getElementById('blue-font-tag');
    var b = document.getElementById('green-font-tag');
    var c = document.getElementById('red-font-tag');
    var d = document.getElementById('purple-font-tag');
    var tag_list = document.getElementsByClassName('sophie');
    for (i = 0; i < 1; i++) {
        var x = tag_list[i];
        if (x.style.color !== "navy") {
            x.style.color = "navy";
        } else {
            x.style.color = "black";
        }
    }
    if (a.style.display === 'block') {
        a.style.display = 'none';
    } else {
        a.style.display = 'block';
        b.style.display = 'none';
        c.style.display = 'none';
        d.style.display = 'none';
    }
}

function greenFont() {
    var a = document.getElementById('blue-font-tag');
    var b = document.getElementById('green-font-tag');
    var c = document.getElementById('red-font-tag');
    var d = document.getElementById('purple-font-tag');
    var tag_list = document.getElementsByClassName('sophie');
    for (i = 0; i < 1; i++) {
        var x = tag_list[i];
        if (x.style.color !== "seagreen") {
            x.style.color = "seagreen";
        } else {
            x.style.color = "black";
        }
    }
    if (b.style.display === 'block') {
        b.style.display = 'none';
    } else {
        b.style.display = 'block';
        a.style.display = 'none';
        c.style.display = 'none';
        d.style.display = 'none';
    }
}

function redFont() {
    var a = document.getElementById('blue-font-tag');
    var b = document.getElementById('green-font-tag');
    var c = document.getElementById('red-font-tag');
    var d = document.getElementById('purple-font-tag');
    var tag_list = document.getElementsByClassName('sophie');
    for (i = 0; i < 1; i++) {
        var x = tag_list[i];
        if (x.style.color !== "maroon") {
            x.style.color = "maroon";
        } else {
            x.style.color = "black";
        }
    }
    if (c.style.display === 'block') {
        c.style.display = 'none';
    } else {
        c.style.display = 'block';
        a.style.display = 'none';
        b.style.display = 'none';
        d.style.display = 'none';
    }
}

function purpleFont() {
    var a = document.getElementById('blue-font-tag');
    var b = document.getElementById('green-font-tag');
    var c = document.getElementById('red-font-tag');
    var d = document.getElementById('purple-font-tag');
    var tag_list = document.getElementsByClassName('sophie');
    for (i = 0; i < 1; i++) {
        var x = tag_list[i];
        if (x.style.color !== "purple") {
            x.style.color = "purple";
        } else {
            x.style.color = "black";
        }
    }
    if (d.style.display === 'block') {
        d.style.display = 'none';
    } else {
        d.style.display = 'block';
        a.style.display = 'none';
        b.style.display = 'none';
        c.style.display = 'none';
    }
}

function rightAlign() {
    var a = document.getElementById('right-tag');
    var b = document.getElementById('left-tag');
    var c = document.getElementById('center-tag');
    var tag_list = document.getElementsByClassName('sophie');
    for (i = 0; i < tag_list.length; i++) {
        var x = tag_list[i];
        if (x.style.textAlign !== "right") {
            x.style.textAlign = "right";
        } else {
            x.style.textAlign = "initial";
        }
    }
    if (a.style.display === 'block') {
        a.style.display = 'none';
    } else {
        a.style.display = 'block';
        b.style.display = 'none';
        c.style.display = 'none';
    }
}

function leftAlign() {
    var a = document.getElementById('right-tag');
    var b = document.getElementById('left-tag');
    var c = document.getElementById('center-tag');
    var tag_list = document.getElementsByClassName('sophie');
    for (i = 0; i < tag_list.length; i++) {
        var x = tag_list[i];
        if (x.style.textAlign !== "left") {
            x.style.textAlign = "left";
        } else {
            x.style.textAlign = "initial";
        }
    }
    if (b.style.display === 'block') {
        b.style.display = 'none';
    } else {
        b.style.display = 'block';
        a.style.display = 'none';
        c.style.display = 'none';
    }
}

function centerAlign() {
    var a = document.getElementById('right-tag');
    var b = document.getElementById('left-tag');
    var c = document.getElementById('center-tag');
    var tag_list = document.getElementsByClassName('sophie');
    for (i = 0; i < tag_list.length; i++) {
        var x = tag_list[i];
        if (x.style.textAlign !== "center") {
            x.style.textAlign = "center";
        } else {
            x.style.textAlign = "initial";
        }
    }
    if (c.style.display === 'block') {
        c.style.display = 'none';
    } else {
        c.style.display = 'block';
        a.style.display = 'none';
        b.style.display = 'none';
    }
}
