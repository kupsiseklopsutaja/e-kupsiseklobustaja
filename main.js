var kupsis = document.getElementById("kupsis");
var counter = document.getElementById("counter");
var count = 0
var vanaemaNupp = document.getElementById("vanaemaNupp");
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