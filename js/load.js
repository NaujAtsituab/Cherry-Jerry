
var loadState = {
    preload: function () {
        var loadinglabel = game.add.text(160, 300, 'loading...', {font: '30px courier', fill: '#ffffff'} );

            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.PageAlignHorizonally = true;
            game.scale.PageAlignVertically = true;
            game.stage.backgroundColor = '#DEB887';

            game.load.spritesheet('Jerry', 'assets/sprites/Jerry2.png',879, 1101);
			
    },

    create: function () {
       game.state.start('title');
    }
        
};
