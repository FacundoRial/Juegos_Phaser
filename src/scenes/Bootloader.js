class Bootloader extends Phaser.Scene{
    constructor(){
        super("Bootloader");
    }
    init(){
        console.log("Scene Bootloader");
    }
    preload(){
        this.load.path = "./assets/";
        this.load.image(["cubix", "cubix_fondo"]);
        this.load.atlas('tomato', 'tomato/tomato.png', 'tomato/tomato_atlas.json');
        this.load.animation('tomatoAnim', 'tomato/tomato_anim.json');
    }
    create(){
        this.tomato = this.add.sprite(100, 100, 'tomato').setScale(4);
        this.tomato.anims.play('tomato_walk');
    }   

    update(time, delta){
    }
}

export default Bootloader;