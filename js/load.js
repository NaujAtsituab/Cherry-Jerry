
var loadState = {
    preload: function () {
        var loadinglabel = game.add.text(160, 300, 'loading...', {font: '30px courier', fill: '#ffffff'} );
		//var cursors;
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.PageAlignHorizonally = true;
            game.scale.PageAlignVertically = true;
            game.stage.backgroundColor = '#505050';
			
			this.load.tilemap('World','assets/maps/World/World.json',null,Phaser.Tilemap.TILED_JSON);		
			this.load.image('5-01', 'assets/maps/World/5-01.png');
		    this.load.image('platform1','assets/maps/World/platform.png');
			
			game.load.spritesheet('Jerry', 'assets/sprites/Jerry3.png',945, 1067);
    },

    create: function () {
       game.state.start('title');
    }
        
};
