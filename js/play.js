
﻿var playState = {
    create: function () {
        var self = this;
		self.player = game.add.sprite(20, 200, 'player');
        self.player.frame = 0;
        game.add.existing(player);
        player.anchor.setTo(.5, 1);
	//  self.player.animations.add('wait',[0,3,4],2, true); 
		self.player.animations.add('move',[0,1],2,true);
	//  self.player.animations.add('jump', [0,5],2,true);
		game.input.activePointer.capture = true;
		game.physics.enable(self.player, Phaser.Physics.ARCADE);
		
    },
    update: function () {
		var self = this;
		player.body.velocity.x = 0;
		if (cursors.left.is.Down)
		{
			player.body.velocity.x = -150;
			player.animations.play('move');
			player.scale.x = -1;
			
			
		}
		else if (cursors.right.isDown)
		{
			player.body.velocity.x = 150;
			player.animations.play('move');
			player.scale.x = 1;
		}
		else
		{
			player.animations.stop();
			player.frame = 4;
		}
		if (cursors.up.isDown && player.body.touching.down && hitPlatform)
		{
			player.frame = 5;
			player.body.velocity.y = -350;
		
}
