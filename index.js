console.log("Hola");

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player1;
var player2;
var player3;
var player4;

function onYouTubeIframeAPIReady() {
    loadVideos();
}


function loadVideos(){
  player1 = new YT.Player('video1', {
    videoId: 'xGhoqGPcN7A',
    playerVars: { 'autoplay': 1, 'controls': 0, 'showinfo':0, 'modestbranding':1, 'rel':0},
    events: {
      'onReady': onPlayer1Ready,
      'onStateChange': onPlayerStateChange
    }
  });

  player2 = new YT.Player('video2', {
    videoId: 'Ka4Dj_BVEh4',
    playerVars: { 'autoplay': 1, 'controls': 0, 'showinfo':0, 'modestbranding':1, 'rel':0},
    events: {
      'onReady': onPlayer2Ready,
      'onStateChange': onPlayerStateChange
    }
  });

  player3 = new YT.Player('video3', {
    frameborder: 0,
    videoId: 'QbYC4wnad7Q',
    playerVars: { 'autoplay': 1, 'controls': 0, 'showinfo':0, 'modestbranding':1, 'rel':0},
    events: {
      'onReady': onPlayer3Ready,
      'onStateChange': onPlayerStateChange
    }
  });

  player4 = new YT.Player('video4', {
    videoId: 'I5QrfzIx7e0',
    playerVars: { 'autoplay': 1, 'controls': 0, 'showinfo':0, 'modestbranding':1, 'rel':0},
    events: {
      'onReady': onPlayer4Ready,
      'onStateChange': onPlayerStateChange
    }
  });
}




// 4. The API will call this function when the video player is ready.
function onPlayer1Ready(event) {
  //event.target.playVideo();
}

function onPlayer2Ready(event) {
  //event.target.playVideo();
}

function onPlayer3Ready(event) {
  //event.target.playVideo();
}

function onPlayer4Ready(event) {
  //event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}