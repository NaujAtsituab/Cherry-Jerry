
var loadState = {
    preload: function () {
        var loadinglabel = game.add.text(80, 150, 'loading...', {font: '30px courier', fill: '#ffffff}' );

            game.scale.scalemode = phaser.scalemanager.show_all;
            game.scale.PageAlignhorizonally = true;
            game.scale.PageAlignvertically = true;
            game.stage.backgroundColor = '#000000';

            game.load.spritesheet('player', 'assets/sprites/Jerry2.png', 775, 750);

    },

    create: function () {
       game.state.start('title');
    }
        
};
