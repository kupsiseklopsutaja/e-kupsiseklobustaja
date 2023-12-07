var kupsis = document.getElementById("kupsis");
var counter = document.getElementById("counter");
var count = 0
var vanaemaNupp = document.getElementById("vanaemaNupp");
var vanaemaPold = document.getElementById("vanaemaPold");
var vanaemaCount = 0;
var vanaemaHind = 100;
var helid = [document.getElementById('heli1'), document.getElementById('heli2'), document.getElementById('heli3')];

kupsis.onclick = function(){
  count = count + 1
  counter.innerHTML = count;
  kupsis.style.transform = "scale(1.2)";
  setTimeout(function(){ kupsis.style.transform = "scale(1)"; }, 100);

  let heli = helid[Math.floor(Math.random() * helid.length)];
  heli.play();
};

vanaemaNupp.onclick = function(){
  if(count >= vanaemaHind) {
    count = count - vanaemaHind;
    vanaemaCount = Math.floor(vanaemaCount + 1);
    document.getElementById("vanaemaCount").innerHTML = "Vanaemasid: " + vanaemaCount;
    vanaemaHind = Math.floor(vanaemaHind * 1.15);
    document.getElementById("vanaemaHind").innerHTML = "Hind: " + vanaemaHind;
    counter.innerHTML = count;
  } else {
    alert("Sa oled vaene rott!");
  }
}