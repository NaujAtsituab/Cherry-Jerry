
﻿var playState = {
    create: function () {
        var self = this;
		self.player = game.add.sprite(20, 200, 'player');
        self.player.frame = 0;
        game.add.existing(player);
        player.anchor.setTo(.5, 1);
		self.playe.animations.add('wait',[0,1], 4);
		game.input.activePointer.capture = true;
		game.physics.enable(self.player, Phaser.Physics.ARCADE);
		
    },
    update: function () {
		var self = this;
		self.player.animations.play('wait');
		if (game.input.activePointer.isDown){
			self.player.x = game.input.x;
			self.player.y = game.input.y;
    }
}
