
var loadState = {
    preload: function () {
        var loadinglabel = game.add.text(160, 300, 'loading...', {font: '30px courier', fill: '#ffffff'} );
		//var cursors;
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.PageAlignHorizonally = true;
            game.scale.PageAlignVertically = true;
            game.stage.backgroundColor = '#505050';
			
			//cursors = game.input.keyboard.createCursorsKeys();
            game.load.spritesheet('Jerry', 'assets/sprites/Jerry3.png',945, 1067);
			
    },

    create: function () {
       game.state.start('title');
    }
        
};
