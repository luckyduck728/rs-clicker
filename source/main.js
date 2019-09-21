/** @type {import("../typings/phaser")} */

// I'm limiting it to 800x600 for now just to make things easier

import { LoadScene } from "./scenes/load.js"
import { MenuScene } from "./scenes/menu.js"
import { CCScene }   from "./scenes/cc.js"
import { Lumbridge }    from "./scenes/lumbridge.js"

let game = new Phaser.Game({
	width: 800,
	height: 600,
	scene:[
		LoadScene, MenuScene, CCScene, Lumbridge
	]
});
