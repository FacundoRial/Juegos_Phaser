class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Bootloader');
    }
    preload() {
        this.load.path = './assets/';
        this.load.image([
            'cero_opaco',
            'cero',
            'equis',
            'equis_opaco',
            'position',
            'reload',
            'tablero_win',
            'tablero'
        ]);
        this.load.image('font', 'font/font.png');
        this.load.json('fontConfig', 'font/font.json');
        this.load.on('complete', () => {
            const fontConfig = this.cache.json.get('fontConfig');
            this.cache.bitmapFont.add('pixelFont', Phaser.GameObjects.RetroFont.Parse(this, fontConfig));
            this.scene.start('Play');
        });
    }
   
}

export default Bootloader;