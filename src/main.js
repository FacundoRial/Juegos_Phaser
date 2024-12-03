import Bootloader from './scenes/Bootloader.js';

const config = {
    title: 'Curso Phaser',
    url: 'http://google.es',
    version: '0.0.1',

    type: Phaser.AUTO,
    width: 640,
    height: 360,
    parent: 'container',
    pixelArt: true,
    backgroundColor: '#34495e',
    zoom: 1.5,
    banner:{
        hidePhaser: true,
        text: '#fff00f',
        background: [
            '#16a085',
            '#2ecc71',
            '#e74c3c',
            '#000000',
        ]
    },

    scene:[Bootloader]
};

const game = new Phaser.Game(config);

