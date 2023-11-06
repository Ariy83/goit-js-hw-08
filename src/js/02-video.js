import Player from '@vimeo/player';

const iframeEl = document.querySelector('#vimeo-player');

const player = new Player(iframeEl, {
  id: 19231868,
  width: 640,
});

// player.on('play', function () {
//   console.log('played the video!');
// });

const onPlay = function ({ seconds }) {
  console.log(seconds);
};

player.on('timeupdate', onPlay);
