// https://www.august.com.au/blog/svg-animation-with-greensock/

window.onload=function(){

const tl = new TimelineMax({immediateRender:true,paused:true});
const elem = document.getElementById('ellipse-53');
var playBtn = document.getElementById('btn1');
const playForm = document.getElementById('textArea');

const restartBtn = document.getElementById('btn4');

//elem.style.opacity = 0; moved to Set
let duration = 1;
var currentTimeScale = tl.timeScale(0.03); //sets current timeScale 3.6 sec / 0.03 = 120 sec = 2 min
let paused = tl.paused();




playBtn.addEventListener('click', function(e) {

  if(paused) {
    tl.play();
     playBtn.innerHTML = "<i class='far fa-pause-circle'></i>";
    paused=false;
 }

 else{
   tl.pause();
   playBtn.innerHTML = "<i class='far fa-play-circle'></i>" ;
   paused=true;
    }
  });

playForm.addEventListener('click', function(e){
  tl.play();
document.getElementById('btn1').innerHTML = "<i class='far fa-pause-circle'></i>";
  paused=false;
});
//maybe delete the restart, but i feel like if they forget, they should be able to restart
restartBtn.addEventListener('click', function(e) {
  tl.time(0);
  tl.pause();
  paused=true;
});

function done(){
    console.log("duration is: "+t1.duration() + "seconds!");
}



function myFunction() {
  var x = document.getElementById("fin");
  if (x.style.display === "none") {
    x.style.display = "block";
    x.innerhtml="Good Job! You reflected for " + t1.duration() + "seconds!";
  } else {
    x.style.display = "none";
  }
}




/* letter "g" animation
tl.set(elem, {
  opacity: 0
})
.to(elem, duration, {
  x: 1000,
  opacity: 1,
  scale: 2,
  ease: Elastic.easeOut.config(1, 0.3)
});

tl.to(elem, duration, {
  y: 100,
  scale: 8,
}, "-=1");
*/


/* flower animation */
const icnBg = document.getElementById('icnBg');
const petales_grp1 = document.querySelectorAll('.cls-8');
const petales_grp2 = document.querySelectorAll('.cls-9');
const petales_center = document.querySelector('.cls-10');

const plante_tige = document.querySelector('.cls-7');
const plante_leafRight = document.getElementById('group-7-2');
const plante_leafLeft = document.getElementById('group-7');

var flower = [petales_grp1, petales_grp2, petales_center];
var plante = [plante_tige, plante_leafRight, plante_leafLeft];


tl.set(petales_grp1, {
  scale: 0,
  transformOrign:'0% 0%',
  //rotation: 0
})

tl.set(petales_grp2, {
  scale: 0,
})

tl.set(petales_center, {
  scale: 0,
  transformOrign:'0% 0%'
})

tl.set(plante_tige, {
  scale: 0
})

tl.set(plante_leafRight, {
  scale: 0
})

tl.set(plante_leafLeft, {
  scale: 0
})


tl.staggerTo(plante, 0.8, {
  scale: 1
}, 0.5,

  //onComplete:tweenComplete,
  //onCompleteParams:["{self}"]},
  //1.2, myCompleteAll

);

tl.staggerTo(flower, 0.8, {
  scale: 1
}, 0.5
  //onComplete:tweenComplete,
  //onCompleteParams:["{self}"]},
  //1.2, myCompleteAll
);

//
//
//
var secondsRemaining;
var intervalHandle;


function tick(){
	// grab the h1
	var timeDisplay = document.getElementById("time");

	// turn the seconds into mm:ss
	var min = Math.floor(secondsRemaining / 60);
	var sec = secondsRemaining - (min * 60);

	//add a leading zero (as a string value) if seconds less than 10
	if (sec < 10) {
		sec = "0" + sec;
	}

	// concatenate with colon
	var message = min.toString() + ":" + sec;

	// now change the display
	timeDisplay.innerHTML = message;

	// stop is down to zero
	if (secondsRemaining === 0){
		alert("Done!");
		clearInterval(intervalHandle);
	}

	//subtract from seconds remaining
	secondsRemaining--;

}

function startCountdown(){


	// get countents of the "minutes" text box
	var minutes = 2;


	// how many seconds
	secondsRemaining = minutes * 60;

	//every second, call the "tick" function
	// have to make it into a variable so that you can stop the interval later!!!
	intervalHandle = setInterval(tick, 1000);


}

window.onload = function(){

	// create input text box and give it an id of "min"
	var inputMinutes = document.createElement("input");
	inputMinutes.setAttribute("id", "minutes");
	inputMinutes.setAttribute("type", "text");

	//create a button
	var startButton = document.createElement("input");
	startButton.setAttribute("type","button");
	startButton.setAttribute("value","Start Countdown");
	startButton.onclick = function(){
		startCountdown();
	};



}



}
