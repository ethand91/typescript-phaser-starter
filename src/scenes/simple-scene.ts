export class SimpleScene extends Phaser.Scene {
  preload () {
    (this as any).load.image('cokecan', 'assets/cokecan.png');
  }

  create () {
    (this as any).add.text(100, 100, 'Hello Phaser!', { fill: '#0f0' });
    (this as any).add.image(100, 200, 'cokecan');
  }
}
