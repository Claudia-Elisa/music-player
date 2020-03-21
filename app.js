var song = new Audio("./mp3/true.mp3");

function togglePlay() {
  if (song.paused) {
    song.play();
  } else {
    song.pause();
  };
};

function changeImage() {
  var minus = document.getElementById("image");

  if (minus.src == "file:///C:/Users/Probook/Desktop/Claudia/Programmeren/music/images/play.png") {
      minus.src = "file:///C:/Users/Probook/Desktop/Claudia/Programmeren/music/images/pause.png";
    } else {
      minus.src = "file:///C:/Users/Probook/Desktop/Claudia/Programmeren/music/images/play.png";
    };
};
