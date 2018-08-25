import * as Phaser from 'phaser';

import { SimpleScene } from './scenes/simple-scene';

const gameConfig: object = {
  width: 680,
  height: 400,
  scene: SimpleScene
};

new Phaser.Game(gameConfig);
