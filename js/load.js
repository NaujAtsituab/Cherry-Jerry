
var loadState = {
    preload: function () {
        var loadinglabel = game.add.text(160, 300, 'loading...', {font: '30px courier', fill: '#ffffff'} );
		//var cursors;
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.PageAlignHorizonally = true;
            game.scale.PageAlignVertically = true;
            game.stage.backgroundColor = '#505050';
			
			//cursors = game.input.keyboard.createCursorsKeys();
            
			
			/*game.load.tilemap('world','assets/maps/World/World.json',null,Phaser.Tilemap.TILED_JSON);
			
			game.load.image('background2', 'assets/maps/inUse/5-01.png');
		    game.load.image('platform2','assets/maps/inUse/platform.png');*/
			
			game.load.spritesheet('Jerry', 'assets/sprites/Jerry3.png',945, 1067);
    },

    create: function () {
       game.state.start('title');
    }
        
};
