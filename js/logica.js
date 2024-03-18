

// funcion contador articulo de xbox series x
function incrementer(){
 
  var i = document.getElementById("counter");
  i.value++;
  var e = document.getElementById("carro");
  e.value++;
  var XX = document.getElementById("xboxxd");
  XX.value++;
  var ssxx = document.getElementById("sumaxx");
  ssxx.value= 500000 * XX.value;
  var stotal = document.getElementById("total");
  stotal.value=0
  stotal.value=  parseInt(stotal.value) + parseInt(ssxx.value) ;
  
  // stotal.value=  stotal.value + stotal.value ;
  // stotal.value=parseFloat( ssxx)+parseFloat(stotal);
}

function decrementer(){
  var i = document.getElementById("counter");
  i.value--;
  if (i.value<=0){
    i.value = 0;
  }
  var e = document.getElementById("carro");
  e.value--;
  if (e.value<=0){
    e.value = 0;
    }
    var XX = document.getElementById("xboxxd");
    XX.value--;
  if (XX.value<=0){
    XX.value = 0;
  }
  var rxbox = document.getElementById("sumaxx");
  rxbox.value= 500000 * XX.value ;
  if (rxbox.value<=0){
    rxbox.value = 0;
  }
  var rbox = document.getElementById("total");
  rbox.value= 500000 * XX.value ;
  if (rbox.value<=0){
    rbox.value = 0;
  }
  // funcion contador articulo de xbox series s
}
function incrementers(){
  var s = document.getElementById("carros");
  s.value++;
  var e = document.getElementById("carro");
  e.value++;
  var XS = document.getElementById("xboxxs");
  XS.value++;
  var sxss = document.getElementById("sumaxs");
  sxss.value= 500000 * XS.value;
  var stotal = document.getElementById("total");
  stotal.value= 500000 * XS.value;
  
}

function decrementers(){
  var s = document.getElementById("carros");
  s.value--;
  if (s.value<=0){
    s.value = 0;
  }
  var e = document.getElementById("carro");
  e.value--;
  if (e.value<=0){
    e.value = 0;
  }
  var XS = document.getElementById("xboxxs");
    XS.value--;
  if (XS.value<=0){
    XS.value = 0;
  }
  var rxboxs = document.getElementById("sumaxs");
  rxboxs.value= 500000 * XS.value ;
  if (rxboxs.value<=0){
    rxboxs.value = 0;
  }
  var rboxs = document.getElementById("total");
  rboxs.value= 500000 * XS.value ;
  if (rboxs.value<=0){
    rboxs.value = 0;
  }
  // funcion contador articulo de Nintendo Switch
}
function incrementerw(){
  var w = document.getElementById("carrow");
  w.value++;
  var e = document.getElementById("carro");
  e.value++;
  var ws = document.getElementById("sw");
  ws.value++;
  var sumasw = document.getElementById("sumasw");
  sumasw.value= 500000 * ws.value;
  var stotal = document.getElementById("total");
  stotal.value= 500000 * ws.value;
}

function decrementerw(){
  var w = document.getElementById("carrow");
  w.value--;
  if (w.value<=0){
    w.value = 0;
  }
  var e = document.getElementById("carro");
  e.value--;
  if (e.value<=0){
    e.value = 0;
  }
  var sw = document.getElementById("sw");
    sw.value--;
  if (sw.value<=0){
    sw.value = 0;
  }
  var restasw = document.getElementById("sumasw");
    restasw.value= 500000 * sw.value ;
  if (restasw.value<=0){
    restasw.value = 0;
  }
  var restas = document.getElementById("total");
    restas.value= 500000 * sw.value ;
  if (restas.value<=0){
    restas.value = 0;
  }
}
// funcion contador articulo de Playstation 5

function incrementerp(){
  var p = document.getElementById("carrop");
  p.value++;
  var e = document.getElementById("carro");
  e.value++;
  var ps = document.getElementById("ps5");
  ps.value++;
  var sumap = document.getElementById("sumaps5");
  sumap.value= 500000 * ps.value;
  var stotal = document.getElementById("total");
  stotal.value= 500000 * ps.value;
}

function decrementerp(){
  var p = document.getElementById("carrop");
  p.value--;
  if (p.value<=0){
    p.value = 0;
  }
  var e = document.getElementById("carro");
    e.value--;
  if (e.value<=0){
    e.value = 0;
  }
  var ps = document.getElementById("ps5");
    ps.value--;
  if (ps.value<=0){
    ps.value = 0;
  }
  var restap = document.getElementById("sumaps5");
    restap.value= 500000 * ps.value ;
  if (restap.value<=0){
    restap.value = 0;
  }
  var rstap = document.getElementById("total");
    rstap.value= 500000 * ps.value ;
  if (rstap.value<=0){
    rstap.value = 0;
  }
}
