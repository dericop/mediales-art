console.log("Hola");

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var iconPlay1 = document.getElementById('icon-play-1');
var iconPlay2 = document.getElementById('icon-play-2');
var iconPlay3 = document.getElementById('icon-play-3');
var iconPlay4 = document.getElementById('icon-play-4');

var iconVolume1 = document.getElementById('icon-volume-1');
var iconVolume2 = document.getElementById('icon-volume-2');
var iconVolume3 = document.getElementById('icon-volume-3');
var iconVolume4 = document.getElementById('icon-volume-4');

var player1;
var player2;
var player3;
var player4;
var videosLoaded = 0;

function onYouTubeIframeAPIReady() {
    loadVideos();
}

function loadVideos(){
  player1 = new YT.Player('video1', {
    videoId: 'xGhoqGPcN7A',
    playerVars: { 'autoplay': 0, 'controls': 0, 'showinfo':0, 'modestbranding':1, 'rel':0, 'autohide':1},
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });

  player2 = new YT.Player('video2', {
    videoId: 'Ka4Dj_BVEh4',
    playerVars: { 'autoplay': 0, 'controls': 0, 'showinfo':0, 'modestbranding':1, 'rel':0, 'autohide':1},
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });

  player3 = new YT.Player('video3', {
    frameborder: 0,
    videoId: 'QbYC4wnad7Q',
    playerVars: { 'autoplay': 0, 'controls': 0, 'showinfo':0, 'modestbranding':1, 'rel':0, 'autohide':1},
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });

  player4 = new YT.Player('video4', {
    videoId: 'I5QrfzIx7e0',
    playerVars: { 'autoplay': 0, 'controls': 0, 'showinfo':0, 'modestbranding':1, 'rel':0, 'autohide':1},
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  videosLoaded++;
  allVideosLoaded();
}


function allVideosLoaded(){
  
  if(videosLoaded > 3){
    player1.playVideo();  
    player2.playVideo();
    player3.playVideo();
    player4.playVideo();
  }
}

function toglePlay(video){

  switch(video){
    case 1:
      
      if(player1.getPlayerState() === 1){
          stopPlayer(player1, iconPlay1);
      }else{
          playPlayer(player1, iconPlay1);
      }
        
      break;
    case 2:

      if(player2.getPlayerState() === 1){
          stopPlayer(player2, iconPlay2);
      }else{
          playPlayer(player2, iconPlay2);
      }
      break;
    case 3:
      if(player3.getPlayerState() === 1){
          stopPlayer(player3, iconPlay3);
      }else{
          playPlayer(player3, iconPlay3);
      }
      break;
    case 4:
      if(player4.getPlayerState() === 1){
          stopPlayer(player4, iconPlay4);
      }else{
          playPlayer(player4, iconPlay4);
      }
      break;
  }
}

function togleVolume(video){
  switch(video){
    case 1:
      console.log("Muted: "+player1.isMuted());

      if(player1.isMuted()){
          nonMutePlayer(player1, iconVolume1);
      }else{
          mutePlayer(player1, iconVolume1);
      }
        
      break;
    case 2:

      if(player2.isMuted()){
          nonMutePlayer(player2, iconVolume2);
      }else{
          mutePlayer(player2, iconVolume2);
      }
      break;
    case 3:
      if(player3.isMuted()){
          nonMutePlayer(player3, iconVolume3);
      }else{
          mutePlayer(player3, iconVolume3);
      }
      break;
    case 4:
      if(player4.isMuted()){
          nonMutePlayer(player4, iconVolume4);
      }else{
          mutePlayer(player4, iconVolume4);
      }
      break;
  }
}

function playPlayer(player, icon){
  player.playVideo();
  icon.classList.add('glyphicon-pause');
  icon.classList.remove('glyphicon-play');
}

function stopPlayer(player, icon){
  player.pauseVideo();
  icon.classList.remove('glyphicon-pause');
  icon.classList.add('glyphicon-play');
}

function mutePlayer(player, icon){
  player.mute();
  icon.classList.remove('glyphicon-volume-off');
  icon.classList.add('glyphicon-volume-up');
}

function nonMutePlayer(player, icon){
  player.unMute();
  icon.classList.remove('glyphicon-volume-up');
  icon.classList.add('glyphicon-volume-off');
 
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    event.target.playVideo();
  }
}