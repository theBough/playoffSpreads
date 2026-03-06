var coll = document.getElementsByClassName("collapsible");

var slider = document.getElementById("myRange");
var gameOneScore = document.getElementById("gameOneScore");
var sliderTwo = document.getElementById("myRangeTwo");
var gameTwoScore = document.getElementById("gameTwoScore");
var sliderThree = document.getElementById("myRangeThree");
var gameThreeScore = document.getElementById("gameThreeScore");

var sliderFour = document.getElementById("myRangeFour");
var gameFourScore = document.getElementById("gameFourScore");
var sliderFive = document.getElementById("myRangeFive");
var gameFiveScore = document.getElementById("gameFiveScore");
var sliderSix = document.getElementById("myRangeSix");
var gameSixScore = document.getElementById("gameSixScore");

var theirName = document.getElementById("theirName")
var anthem = document.getElementById("anthem")
var brave = document.getElementById("brave")
var coinToss = document.getElementById("select")
var thePlayers = [];
var table = document.getElementById("myTable");

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function sbProps(){
  var newJob = document.createElement("tr");
  newJob.innerHTML = 
    "<td>" + theirName.value +" </td><td>" + anthem.value + "</td><td>" + brave.value + "</td><td>" + select.value + "</td>";
  table.tBodies[0].appendChild(newJob);
  
}

function toggleCssMenu(icon) {
  var cssmenu = document.getElementById('cssmenu');
  if (icon.className.indexOf('active') == -1) {
    icon.className = 'menu-icon active';
    cssmenu.style.display = "block";
    setTimeout(function() { cssmenu.className = 'active'; }, 0);
  }
  else {
    icon.className = 'menu-icon';
    cssmenu.className = '';
    setTimeout(function() { cssmenu.style.display = "none"; }, 411);
  }
}
function changeText(x) {
  x.innerHTML = "Click the menu lines on the right"
}
function changeTextBack(x) {
  x.innerHTML = "Boughen's Playoff Spread"
}
function changeOpacity(x) {
  x.style.opacity = "0.5"
}
function changeOpacityOut(x) {
  x.style.opacity = "0.3"
}


