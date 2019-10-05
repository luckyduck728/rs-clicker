import { CONSTANTS } from "../constants.js";

export class LoadScene extends Phaser.Scene{
    constructor() {
        super({
            key: CONSTANTS.SCENES.LOAD,

            pack: {
                files: [
                    {
                        type: 'image',
                        key: 'lesser-demon',
                        url: '/source/assets/sprites/Lesser_demon.png'
                    }
                ]
            }
        });
    }
    init(){
        // this is where you receive data from other scenes or instantiate plugins

    }
    preload(){

        // splash screen stuff
        this.add.image(750, 600, 'lesser-demon');


        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle("#ED1C24", .2);
        progressBox.fillRect(240, 270, 320, 50);
        
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'RS Clicker is loading - Please Wait...',
            style: {
                font: '18px courier',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);
        
        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '12px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);
        
        // var assetText = this.make.text({
        //     x: width / 2,
        //     y: height / 2 + 50,
        //     text: '',
        //     style: {
        //         font: '18px monospace',
        //         fill: '#ffffff'
        //     }
        // });
        // assetText.setOrigin(0.5, 0.5);
        
        this.load.on('progress', function (value, file) {
            percentText.setText('Loading asset: good ol rs stuff ' + parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xED1C24, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
        });
        
        // this.load.on('fileprogress', function (file) {
        //     assetText.setText('Loading asset: ' + file.key);
        // });

        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            //assetText.destroy();
        });
        
        // Simulate lag
        for (let i = 0; i < 500; i++) {
            this.load.image('chicken' + i, 'source/assets/sprites/chicken.jpg');
        }

        // Fonts
        //this.load.bitmapFont('rsfont', 'source/assets/fonts/runescape_uf.bmp');

        // Enemies
        this.load.image('chicken', 'source/assets/sprites/chicken.jpg');
        this.load.image('lesser-demon', 'source/assets/sprites/Lesser_demon.png');
        
        // Backgrounds/Logos
        this.load.image('menu-bg', 'source/assets/MenuBg.png');
        this.load.image('menu', 'source/assets/menu.png');
        this.load.image('rsc-logo', 'source/assets/rsclogo.png');
        this.load.image('lvl1-bg', 'source/assets/lvl1bg.png');

        // Buttons
        this.load.image('play-button', 'source/assets/playbutton.png');
        this.load.image('settings-button', 'source/assets/settingsbutton.png');

        // Audio
        
    }
    create(){
        // this is where you make game objects

        this.add.text(250, 300, "Welcome to RS Clicker!");
        this.add.text(250, 340, "Click the demon to continue.");

        let lesserDemonSprite = this.add.image(750, 600, 'lesser-demon');
        lesserDemonSprite.setInteractive();

        // Make it go to menu on click
        lesserDemonSprite.on("pointerup", ()=>{
            this.scene.start(CONSTANTS.SCENES.MENU);
        })

        
        //
        /*
            Use launch to start a scene in parallel
            this.scene.launch(...)

            Use add to start dynamically
            this.scene.add(...)
        */
    }
    update(){
        // this is the update loop
        // dont need this for load scene
    
    }
}