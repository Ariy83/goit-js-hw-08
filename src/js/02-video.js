import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframeEl = document.querySelector('#vimeo-player');

const player = new Player(iframeEl, {
  id: 19231868,
  width: 640,
});

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

const onPlay = function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));
