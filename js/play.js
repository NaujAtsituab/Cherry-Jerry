
﻿var playState = {
    create: function () {
        var self = this;
		
        //self.player.frame = 1;
        game.add.existing(self.player);
        self.player.anchor.setTo(.5, 1);
	//  self.player.animations.add('wait',[0,3,4],2, true); 
		self.player.animations.add('move',[0,1],2,true);
	//  self.player.animations.add('jump', [0,5],2,true);
		game.physics.enable(self.player, Phaser.Physics.ARCADE);
		
    },
    update: function () {
		
		self.player.scale.setTo(0.1,0.1);
		self.player.body.velocity.x = 0;
		if (cursors.left.is.Down)
		{
			self.player.body.velocity.x = -150;
			self.player.animations.play('move');
			
			
			
		}
		else if (cursors.right.isDown)
		{
			self.player.body.velocity.x = 150;
			self.player.animations.play('move');
			
		}
		else
		{
			self.player.animations.stop();
			self.player.frame = 4;
		}
		if (cursors.up.isDown && player.body.touching.down && hitPlatform)
		{
			self.player.frame = 5;
			self.player.body.velocity.y = -350;
		
}
	}
}