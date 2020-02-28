var video;
var volume;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	console.log("Play Video");
	console.log(video);
	volume = document.querySelector('#volume'); 
	console.log("Volume is " + video.volume);
	volume.innerHTML = 100*video.volume + '%'; 
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate *= 0.8;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {

	video.playbackRate *=1.25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	console.log("Old location is "+ video.currentTime + " seconds");
	if ((video.currentTime + 60) < video.duration){
		video.currentTime += 60;
	}

	else{
		video.currentTime = 0;
		video.playbackRate = 1;
	}

	console.log("New location is "+ video.currentTime + " seconds");
} 

function mute() { 
	let mute = document.querySelector('#mute'); 

  	if (video.muted == true){
  		console.log("Unmuted");
  		video.muted = false;
  		mute.innerHTML = "Mute";
  	}
  	else{
  		video.muted = true;
  		console.log("Muted");
  		mute.innerHTML = "Unmute";
  	}
  	
      	
}

function changeVolume() {;
	let slider = document.querySelector('#volumeSlider')
	video.volume = slider.value/100;
	volume.innerHTML = slider.value + '%'; 
 	console.log("Volume is " + video.volume);
}
       

function gray() { 
	video.classList.add('grayscale')
	console.log("In grayscale");
}

function color() {
	video.classList.remove('grayscale')
	console.log("In color"); 
}
